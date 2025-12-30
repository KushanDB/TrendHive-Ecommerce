import { Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-primary p-2">
            <div className="w-[300px] h-full bg-primary flex flex-col items-center gap-[20px]">
                <div className="flex flex-row w-[90%] h-[70px] bg-accent items-center rounded-2xl">
                    <img src="/img_12.png" alt="TrendHive Logo" className="h-[60px] m-2" />
                    <span className="text-secondary font-medium text-xl">Admin Panel</span>
                </div>
            </div>


            <div className="w-[calc(100%-300px)] h-full border-[3px] border-accent rounded-[15px] overflow-hidden">
                <div className="w-full max-w-full h-full max-h-full overflow-y-scroll">
                    <Routes path="/">
                        <Route path='/' element={<h1 className="text-secondary">Dashboard</h1>} />
                        <Route path='/products' element={<h1 className="text-secondary">Products</h1>} />
                        <Route path='/orders' element={<h1 className="text-secondary">Orders</h1>} />
                    </Routes>
                </div>


            </div>

        </div>
    );
} 