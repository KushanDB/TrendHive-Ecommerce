import mongoose from "mongoose";

const studentSchema = new mongoose.Schema( // structure of the document
    {
        name : String,
        age : Number,
        city : String
    }
)

const Student = mongoose.model("Student", studentSchema) // Define Mongoose Model

export default Student


