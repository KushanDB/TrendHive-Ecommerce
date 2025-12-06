import Product from "../models/product.js"; // Import Product model

// Handle product creation: Save product to database
export async function createProduct(req, res) {

    if(req.user == null){
        res.status(401).json( 
            {
                message: "Please login and try again."
            }
        )
        return;   // Stop further processing because user is not authenticated...
    }

    if(req.user.role !== "admin"){   // Check if user role is admin
        res.status(403).json( 
            {
                message: "You do not have permission to create a product."
            }
        )
        return;   // Stop further processing because user is not authorized...
    }
    
    try{
        const productData = req.body;  // Get product data from request body
        const product = new Product(productData);        // Create new Product instance by using the model
        await product.save();           // Save product to database
        res.json(
            {
                message: "Product created successfully",
                product: product // Return the created product
            }
        )
    }catch(error){
        console.error("Error creating product: ", error); 
        res.status(500).json(                           // Internal Server Error
            {
                message: "Failed to create product"
            }
        )
    }
}