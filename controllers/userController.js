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