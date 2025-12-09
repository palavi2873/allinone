import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Header from "../headfoot/Header";


const Login = () => {
 const navigate = useNavigate();
  const navigateto=()=>
  {
   navigate('/navbar');
  }
    const isLoggedIn = false; 
 return (
    <div className="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-5 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
       {/* <Header/> */}
       <div className="w-full max-w-[300px] bg-white shadow-lg rounded-xl p-5 border border-gray-200">

      <div className="flex justify-center mb-4">
      <img
        src="https://img.freepik.com/premium-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security_566886-2817.jpg?w=1380"
        className="w-[140px] h-[100px] object-contain"
        alt="register"
      />
    </div>

    {/* Form */}
    <form className="space-y-2.5">
      {["Email", "Password"].map((placeholder, i) => (
        <input
          key={i}
          type={placeholder.includes("Password") ? "password" : "text"}
          placeholder={placeholder}
          className="w-full text-[12px] p-2.5 border border-gray-300 rounded-md 
                     bg-gray-50 focus:bg-white focus:ring-1 
                     focus:ring-[#111827] outline-none transition-all"
        />
      ))}

      <button
        type="submit"
        className="w-full py-1.5 bg-[#0D1B2A] text-white text-[11px] rounded-md 
                   shadow hover:bg-[#111827] transition"
        onClick={navigateto}
      >
        Login
      </button>

      <div className="text-center pt-0.5">
        <a href="/register" className="text-[10px] text-gray-600 underline hover:text-gray-800">
           Registered?
        </a>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Login;
