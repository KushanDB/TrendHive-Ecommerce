import mongoose from "mongoose"; // import mongoose

const productSchema = new mongoose.Schema(  // structure of the product document
    {
        productID: {
            type: String,
            required: true,
            unique: true 
        },
        name: {
            type: String,
            required: true
        },
        altName: {
            type: [String],
            default: [],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        images: {
            type: [String], // array of image URLs
            default: [],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        labeledPrice: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
)
const Product = mongoose.model("Product", productSchema); // Create Mongoose Model
export default Product; // Export Product model

