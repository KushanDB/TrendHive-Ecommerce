import { useState } from "react";
import axios from "axios";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  //--------------Send login request to backend by using axios library----------------

    async function Login() {
        // Handle login logic here, e.g., send login request to backend

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, {
            email: email,
            password: password
        })
        console.log(response.data);
    }

    return (
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex">
            <div className="w-[50%] h-full">

            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px] backdrop-blur-md shadow-2xl rounded-[20px] flex flex-col justify-center items-center">
                    <input onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    } className="w-[400px] h-[40px] bg-white mt-[100px] rounded-[5px] pl-[10px] text-[17px]" type="text" placeholder="Username" />

                    <input onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    } className="w-[400px] h-[40px] bg-white mt-[30px] rounded-[5px] pl-[10px] text-[17px]" type="password" placeholder="Password" />

                    <button onClick={Login} className="w-[400px] h-[40px] mt-[50px] rounded-[20px] bg-emerald-700 text-white text-[17px]">
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}