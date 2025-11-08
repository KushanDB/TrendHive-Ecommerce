import express from "express";
import mongoose from "mongoose";  
import studentRouter from "./routes/studentsRouter.js";

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

// Start the server
app.listen(5000,
    ()=>{
        console.log("Server is started...")
        console.log("You can proceed to your work...")
    }
    )
