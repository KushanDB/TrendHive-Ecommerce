import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // For navigation after login

    //------------Function to handle login------------//

    async function Login() {
        // Handle login logic here, e.g., send login request to backend

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, {
                email: email,
                password: password
            });
            const user = response.data.user;
            if (user.role === "admin") {
                navigate('/admin');  // Redirect to admin dashboard
            } else {
                navigate('/');  // Redirect to home page
            }
        } catch (error) {
            console.error("Login failed:", error);
        }

    }

    return (
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
            {/* Dark overlay for dark mode effect */}
            <div className="absolute w-full h-full bg-black/50"></div>

            <div className="relative z-10 w-full max-w-4xl bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl flex overflow-hidden border border-[#9CAFAA]/30">

                {/* Left Side: Branding / Info */}
                <div className="w-1/2 bg-gradient-to-b from-black/40 to-[#000000]/70 flex flex-col justify-center items-center p-10">
                    <img src="/img_12.png" alt="TrendHive Logo" className="w-50 h-25 mb-10 rounded-2xl" />
                    <h1 className="text-4xl font-extrabold text-[#9CAFAA] mb-4 text-center">Welcome to The TrendHive</h1>
                    <p className="text-[#9CAFAA]/70 text-center text-lg">
                        Experience a modern cosmetics shopping journey. Login to continue.
                    </p>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-1/2 flex flex-col justify-center items-center p-10">
                    <h2 className="text-3xl font-semibold text-[#9CAFAA] mb-8">Login to Your Account</h2>

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 rounded-lg pl-4 mb-4 text-lg placeholder-[#9CAFAA]/50 bg-black/40 text-[#9CAFAA] border border-[#9CAFAA]/30 focus:outline-none focus:ring-2 focus:ring-[#B87C4C]/70 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 rounded-lg pl-4 mb-2 text-lg placeholder-[#9CAFAA]/50 bg-black/40 text-[#9CAFAA] border border-[#9CAFAA]/30 focus:outline-none focus:ring-2 focus:ring-[#B87C4C]/70 transition"
                    />

                    {/* Forgot Password */}
                    <div className="w-full flex justify-end mb-6">
                        <button className="text-[#B87C4C] hover:underline text-sm font-medium transition-colors">
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        onClick={Login}
                        className="w-full h-12 rounded-xl bg-[#B87C4C] text-black text-lg font-medium hover:bg-[#9CAFAA] hover:text-black transition-all duration-300 shadow-lg"
                    >
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-[#9CAFAA]/70 mt-6 text-sm">
                        Don't have an account?{" "}
                        <button className="text-[#B87C4C] underline font-medium hover:text-[#9CAFAA] transition-colors">
                            Register
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
