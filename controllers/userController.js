import User from "../models/user.js"; // Import User model
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import jsonwebtoken for token generation


// Handle user creation: Hash password and save user to database
export function createUser(req, res) {

    // Hash the password with a salt round of 10
    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User(        // Create new User instance
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashPassword,
            role: req.body.role
        }
    )

    user.save().then(           // Save user to database
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
                res.status(404).json(
                    {
                        message: "User not found"
                    }
                )
            } else {   // If user found                    
                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password); // Compare the provided password with the stored hashed password
                if (isPasswordValid) { // If password matches

                    // ----------------create jwt token for authenticated user----------------

                    const token = jwt.sign(    // Generate JWT token about the user
                        {
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            isEmailVerified: user.isEmailVerified
                        },
                        "jwt secretkey",  // Secret key for signing the token **********
                    )

                    res.json(
                        {
                            message: "Login successful",
                            token: token  // Return the generated token
                        }
                    )
                } else { // If password does not match
                    res.status(401).json(
                        {
                            message: "Invalid password"
                        }
                    )
                }
            }
        }

    )
}