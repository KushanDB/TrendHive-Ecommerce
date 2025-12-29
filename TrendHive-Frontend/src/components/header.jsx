import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="w-full bg-accent h-[100px] text-gray-500 px-[40px] flex items-center justify-between">
            <div className="w-full h-full flex relative">
                <img src="/img_12.png" className="h-[100%] absolute object-cover left-0" />
                <div className="h-full flex justify-center items-center gap-[30px] ml-[50px] text-lg font-semibold w-full">

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}