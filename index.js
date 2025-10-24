import express from "express";

const app = express()

/*function success(){
    console.log("Server is started...")
    console.log("You can proceed to your work...")
}*/


//Middleware to parse JSON bodies
app.use(express.json())

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
