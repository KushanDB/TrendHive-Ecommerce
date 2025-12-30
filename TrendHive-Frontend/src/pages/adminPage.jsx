import { Link, Route, Routes } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiDropboxLine } from "react-icons/ri";
import { RiShieldUserLine } from "react-icons/ri";


export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-primary p-2">
            <div className="w-[300px] h-full bg-primary flex flex-col items-center gap-[10px]">
                <div className="flex flex-row w-[90%] h-[70px] bg-accent items-center rounded-2xl mb-[10px]">
                    <img src="/img_12.png" alt="TrendHive Logo" className="h-[60px] m-2" />
                    <span className="text-secondary font-medium text-xl">Admin Panel</span>
                </div>
                <Link to="/admin" className="w-[90%] flex items-center gap-3 px-4 py-2 rounded hover:bg-secondary transition-colors text-accent font-medium">
                    <FaChartLine/>
                    Dashboard
                </Link>

                <Link to="/admin/orders" className="w-[90%] flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors text-accent font-medium">
                    <MdOutlineShoppingCart className="text-xl"/>
                    Orders
                </Link>

                <Link to="/admin/products" className="w-[90%] flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors text-accent font-medium">
                    <RiDropboxLine className="text-lg" />
                    Products
                </Link>

                <Link to="/admin/users" className="w-[90%] flex items-center gap-2 px-4 py-2 rounded hover:bg-secondary transition-colors text-accent font-medium">
                    <RiShieldUserLine className="text-lg" />
                    Users
                </Link>

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