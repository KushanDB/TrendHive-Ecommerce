import { Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-primary p-2"> 
            <div className="w-[300px] h-full bg-primary">

            </div>
            <div className="w-[calc(100%-300px)] h-full border-[2px] border-accent rounded-[15px]"> 
                <Routes path="/"> 
                    <Route path='/' element={<h1 className="text-secondary">Dashboard</h1>}/>
                    <Route path='/products' element={<h1 className="text-secondary">Products</h1>}/>
                    <Route path='/orders' element={<h1 className="text-secondary">Orders</h1>}/>
                    
                </Routes>
                

            </div>

        </div>
    );
} 