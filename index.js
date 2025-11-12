import express from "express";
import mongoose from "mongoose";  
import studentRouter from "./routes/studentsRouter.js"; // Import studentRouter
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"; // Import jsonwebtoken for token verification


const app = express()

/*function success(){
    console.log("Server is started...")
    console.log("You can proceed to your work...")
}*/


//Middleware to parse JSON bodies
app.use(express.json())

// Custom middleware to log HTTP requests
app.use(
    (req,res,next)=>{
        let token = req.header("Authorization");
        //console.log("Token received in middleware: ", token);
        //console.log("Http request has been received to the middleware...")
        if(token != null){
            token = token.replace("Bearer ",""); // Remove 'Bearer ' prefix if present
            jwt.verify(token,"jwt secretkey", // decrypt the token to get user data
                (err,decoded)=>{
                        console.log("Decoded token data:", decoded);
                }
            )
        }
    }
)

const connectionString = "mongodb+srv://admin:Kushan123@cluster0.lloh3q9.mongodb.net/?appName=Cluster0"

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected...")
    }
).catch(
    ()=>{
        console.log("Database connection Failed...")
    }
)

// connect  studentRouter to /students path

app.use("/students", studentRouter)

// Connect userRouter to /users path 

app.use("/users", userRouter)


// Start the server in port 5000..

app.listen(5000,
    ()=>{
        console.log("Server is started...")
        console.log("You can proceed to your work...")
    }
    )
