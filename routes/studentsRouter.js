import express from 'express'; // Import express
import { createStudent, getStudents } from '../controllers/studentController.js';  // Import controller functions

const studentRouter = express.Router(); // Create a router instance

studentRouter.get("/", getStudents); // Define route for GET /students

studentRouter.post("/", createStudent); // Define route for POST /students

export default studentRouter;  