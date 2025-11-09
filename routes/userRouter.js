import express from 'express'; // Import express
import { createUser, getUsers } from '../controllers/userController.js';  // Import controller functions

const userRouter = express.Router(); // Create a router instance

userRouter.post('/', createUser); // Route to create a new user

export default userRouter; // Export the router