import express from "express";
import mongoose from "mongoose";    

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

const studentSchema = new mongoose.Schema( // structure of the document
    {
        name : String,
        age : Number,
        city : String
    }
)

const Student = mongoose.model("Student", studentSchema) //Mongoose Model



app.get("/",
    (req,res)=>{
        console.log(req.body)
        console.log("GET request received...")

        let prefix = "Mr."
        if(req.body.Gender === "Female"){
            prefix = "Ms."
        }

        res.json(
            {
                message : "Hello " +prefix+ " " +req.body.Name  
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
                        message : "Student data saved successfully"
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
