import express from "express";
import mongoose from "mongoose";  
import Student from "./models/student.js";  

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



app.get("/",
    (req,res)=>{
       
        //read data from MongoDB
        Student.find().then(
            (studentsData)=>{
                res.json(
                    {
                        studentsData 
                    }
                )
            }
        ).catch(
            ()=>{
                res.json(
                    {
                        message : "Failed to fetch student data"
                    }
                )
                
            }
        )
    }
)

app.post("/",
    (req,res)=>{
        // console.log("POST request received...")
        //console.log(req.body)
        const student = new Student(
            {
                name : req.body.name,
                age : req.body.age,
                city : req.body.city
            }
        )
        student.save().then(
            ()=>{
                res.json(
                    {
                        message : "Student created successfully"
                    }
                )
            }

        ).catch(
            ()=>{
                res.json(
                    {
                        message : "Failed to save student data"
                    }
                )
            }
        )

    }
)

app.delete("/",
    (req,res)=>{
        console.log("DELETE request received...")
    }
)


app.listen(5000,
    ()=>{
        console.log("Server is started...")
        console.log("You can proceed to your work...")
    }
    )
