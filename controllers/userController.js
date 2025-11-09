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

export function loginUser(req, res) { // Login function

    User.findOne( // Find user by email
        { 
            email: req.body.email 
        }
    ).then(
        (user) => {
            if (user == null) {
                res.json(
                    {
                        message: "User not found"
                    }
                )
            }else{
                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password); // Compare the provided password with the stored hashed password
                if (isPasswordValid) {
                    res.json(
                        {
                            message: "Login successful"
                        }
                    )
                }else{
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