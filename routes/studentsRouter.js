import express from 'express';
import Student from '../models/student.js';

const studentRouter = express.Router();

studentRouter.get("/",
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
);

studentRouter.post("/",
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
);

studentRouter.put("/",
    () => {
        console.log("Put request into  studentRouter");
    }
);

studentRouter.delete("/",
    () => {
        console.log("Delete request into  studentRouter");
    }
);

export default studentRouter;  