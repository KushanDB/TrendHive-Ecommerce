import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
    return (
        <div className="w-full h-full bg-primary">
            <Header/>
            <Routes path="/">
                <Route path="/" element={<h1 className="text-3xl text-center mt-20">Welcome to TrendHive!</h1>} />
                <Route path="/products" element={<h1 className="text-3xl text-center mt-20">Our Products</h1>} />
                <Route path="/about" element={<h1 className="text-3xl text-center mt-20">About Us</h1>} />
                <Route path="/contact" element={<h1 className="text-3xl text-center mt-20">Contact Us</h1>} />
                <Route path="/*" element={<h1 className="text-3xl text-center mt-20">Page Not Found</h1>} />
            </Routes>
        </div>
    )
}
        
                