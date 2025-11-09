import User from "../models/user.js"; // Import User model
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

export function createUser(req, res) { 

    const hashPassword = bcrypt.hashSync(req.body.password, 10); // Hash the password with a salt round of 10   

    const user = new User(
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashPassword,
            role: req.body.role
        }
    ) 

    user.save().then(
        () => {
            res.json(
                {
                    message: "User created successfully"
                }
            )
        }
    ).catch(
        () => {
            res.json(
                {
                    message: "Failed to create user"
                }
            )
        }
    )
}

// Handle user login: Check if email exists, then verify password matches 

export function loginUser(req, res) {  // Login user function

    User.findOne( // Find user by email from the request body in database
        { 
            email: req.body.email 
        }
    ).then(
        (user) => {                     // Callback function after finding user
            if (user == null) {    // If user not found
                res.json(
                    {
                        message: "User not found"
                    }
                )
            }else{   // If user found                    
                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password); // Compare the provided password with the stored hashed password
                if (isPasswordValid) { // If password matches
                    res.json(
                        {
                            message: "Login successful"
                        }
                    )
                }else{ // If password does not match
                    res.json(
                        {
                            message: "Invalid password"
                        }
                    )
                }
            }
        }
        
    )
}