import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"; // Import jsonwebtoken for token verification
import productRouter from "./routes/productRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file


const app = express() 

/*function success(){
    console.log("Server is started...")
    console.log("You can proceed to your work...")
}*/

//------------Middleware to Enable CORS for all origins--------------------
app.use(cors())

//Middleware to parse JSON bodies
app.use(express.json())

//-----------------Authentication Middleware Starts Here-------------------

// Custom middleware to log HTTP requests
app.use(
    (req, res, next) => {
        let token = req.header("Authorization"); // Get token from Authorization header
        //console.log("Token received in middleware: ", token);
        //console.log("Http request has been received to the middleware...")
        if (token != null) {
            token = token.replace("Bearer ", ""); // Remove 'Bearer ' prefix if present
            jwt.verify(token, process.env.JWT_SECRET, // decrypt the token to get user data
                (err, decoded) => {          // Run after decryption
                    if(decoded == null){
                        res.json(
                            {
                                message: "Invalid Token... Please login again.."
                            }
                        )
                        return; // Stop further processing because token is invalid
                    }else{
                        //console.log("Decoded JWT Data: ", decoded);
                        req.user = decoded; // Attach decoded user data to request message
                    }
                }
            )
        }
        next();     //Pass the request to relevant route handler
    }
)
//-----------------Authentication Middleware Ends Here-------------------


const connectionString = process.env.MONGODB_URI;

// Connect to MongoDB database

mongoose.connect(connectionString).then(
    () => {
        console.log("Database connected...")
    }
).catch(
    () => {
        console.log("Database connection Failed...")
    }
)

// Connect userRouter to /users path 
app.use("/api/users", userRouter)

// Connect productRouter to /products path
app.use("/api/products", productRouter);

// Start the server in port 5000..

app.listen(5000,
    () => {
        console.log("Server is running on port 5000")
    }
)
