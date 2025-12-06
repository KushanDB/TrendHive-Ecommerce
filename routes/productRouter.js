import express from 'express'; // Import express
import { createProduct, getProducts } from '../controllers/productController.js';

const productRouter = express.Router(); // Create a router instance from express

productRouter.get("/",getProducts); // Route to get all products
productRouter.post("/",createProduct); // Route to create a new product

export default productRouter; // Export the router
