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
        console.log("POST request received...")
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
