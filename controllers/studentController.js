import Student from "../models/student.js"; // Import Student model

export function getStudents(req,res){
       
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

export function createStudent(req,res){

    if(req.user == null){
        res.json(
            {
                message : "Unauthorized access... Please login first."
            }
        )
        return; // Stop further processing if user is not authenticated
    }

    if(req.user.role != "admin"){
        res.json(
            {
                message : "You must be an admin to create student records."
            }
        )
        return; // Stop further processing if user is not admin
    }

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
