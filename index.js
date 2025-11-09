import express from "express";
import mongoose from "mongoose";  
import studentRouter from "./routes/studentsRouter.js"; // Import studentRouter
import userRouter from "./routes/userRouter.js";

const app = express()

/*function success(){
    console.log("Server is started...")
    console.log("You can proceed to your work...")
}*/


//Middleware to parse JSON bodies
app.use(express.json())

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

// connect to  studentRouter

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
