import React from "react";
import Header from "../headfoot/Header";
import { Link } from "react-router-dom";

const Register = () => {
    const isLoggedIn = false;
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
  <div className="w-full max-w-[300px] bg-white shadow-lg rounded-xl p-5 border border-gray-200">

    {/* Top Illustration */}
    <div className="flex justify-center mb-4">
      <img
        src="https://img.freepik.com/premium-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security_566886-2817.jpg?w=1380"
        className="w-[140px] h-[100px] object-contain"
        alt="register"
      />
    </div>

    {/* Form */}
    <form className="space-y-2.5">
      {["Name", "Email", "Password", "Confirm Password"].map((placeholder, i) => (
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
      >
        Register
      </button>

      <div className="text-center pt-0.5">
        <a href="/login" className="text-[10px] text-gray-600 underline hover:text-gray-800">
          Already registered?
        </a>
      </div>
    </form>

  </div>
</div>


    );
}

export default Register;