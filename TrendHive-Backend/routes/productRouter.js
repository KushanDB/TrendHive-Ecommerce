import express from 'express'; // Import express
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router(); // Create a router instance from express

productRouter.get("/",getProducts); // Route to get all products
productRouter.post("/",createProduct); // Route to create a new product
productRouter.delete("/:productId", deleteProduct); // Route to delete a product by ID
productRouter.put("/:productId", updateProduct); // Route to update a product by ID
productRouter.get("/:productId", getProductById); // Route to get a product by ID

export default productRouter; // Export the router
