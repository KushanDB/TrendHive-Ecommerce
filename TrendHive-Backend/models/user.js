import mongoose from "mongoose"; // import mongoose

const userSchema = new mongoose.Schema( // structure of the user document 
    {
        email: {             //act as users primary key
            type: String,
            required: true, // email is required
            unique: true // email must be unique
        },
        firstName: {
            type: String,
            required: true // first name is required
        },
        lastName: {
            type: String,
            required: true // last name is required
        },
        password: {
            type: String,
            required: true // password is required
        },
        role: {
            type: String,
            required: true, // user type is required
            default: "user" // default role is 'user'
        },
        isBlock: {
            type: Boolean,
            default: false // default is not blocked
        },
        isEmailVerified: {
            type: Boolean,
            default: false // default is not verified
        },
        image: {
            type: String,
            default: "#######" // default image is empty
        }
    }
) 

const User = mongoose.model("User", userSchema); // Define Mongoose Model
export default User; // Export User model