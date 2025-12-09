import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>
{
  return(<>
  <nav className="bg-[#262626] shadow-md">
  <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
    
    {/* Left Menu */}
    <ul className="flex items-center gap-6">
      {[
        ["Crud", "/login"],
        ["File operation", "/register"],
        ["API", "/forget_password"],
        ["Event calendar", "/Event calendar"],
        ["Payament gaytway", "/Payament gaytwayr"], 
        ["Live chat", "/Live chat"],
        ["Sending email", "/Sending email"],
        ["Quize", "/Quize"],
        ["Weather app", "/Weather app"],// Active example
      ].map(([label, path]) => (
        <li key={label}>
          <Link
            to={path}
            className={`text-sm text-[#d1d1d1] hover:text-white transition-all duration-200
            px-1 py-1.5 rounded-full ${
              label === "Contact"
                ? "bg-[#0099cc] text-white shadow-sm"
                : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>

    {/* Logo */}
    <h1 className="text-white font-bold tracking-wider text-sm">
      LOGOBAKERY
    </h1>

  </div>
</nav>

      
  </>);
}
export default Navbar;