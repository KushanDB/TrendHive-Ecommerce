import { useState } from "react";

export default function TestPage() {

    const[count, setCount] = useState(0); // useState hook to manage statent
     

   
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-yellow-300 text-white flex justify-center items-center">
                <button
                    onClick={() => {
                        console.log("Decreasing....")
                        setCount(count - 1);
                       
                    }}
                    className="w-[200px] h-[50px] bg-white text-yellow-600 font-bold rounded-lg hover:bg-gray-200">-</button>

                <span className="ml-5 text-3xl font-semibold">{count}</span>

                <button
                    onClick={() => {
                        console.log("Increasing....")
                        setCount(count + 1);
                     
                    }}
                    className="w-[200px] h-[50px] bg-white text-yellow-600 font-bold rounded-lg hover:bg-gray-200 ml-5">+</button>
            </div>

        </div>
    )
}