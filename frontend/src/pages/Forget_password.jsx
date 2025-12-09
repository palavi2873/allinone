import React from "react";
import { Link } from "react-router-dom";

const Forget_password =()=>
{
    const isLoggedIn=false;
   
     return (
       <div className="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
         <header className="w-full lg:max-w-4xl max-w-[335px] text-sm mb-6 ">
           <nav className="flex items-center justify-end gap-4">
             {isLoggedIn ? (
               <Link
                 to="/dashboard"
                 className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
               >
                 Dashboard
               </Link>
             ) : (
               <>
                 <Link
                   to="/login"
                   className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] text-[#1b1b18] border border-transparent hover:border-[#19140035] dark:hover:border-[#3E3E3A] rounded-sm text-sm leading-normal"
                 >
                   Log in
                 </Link>
                 <Link
                   to="/register"
                   className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
                 >
                   Register
                 </Link>
               </>
             )}
           </nav>
         </header>
   
         <div className="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow">
           <main className="flex max-w-[265px] flex-col-reverse lg:max-w-4xl lg:flex-row">
             <div className="text-[13px] leading-[20px] flex-1 p-6 pb-12 lg:p-20 bg-white dark:bg-[#161615] dark:text-[#EDEDEC] rounded-bl-lg rounded-br-lg lg:rounded-tl-lg lg:rounded-br-none shadow-none border border-gray-200 lg:border-r-0">
                <form>
                <label>Email:</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    className="w-[340px] mt-2 mb-6 p-3 bg-blue-50 border border-gray-300 border-r-0 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                    />

                <ul className="flex gap-3 text-sm leading-normal">
                 <li>
                   <Link
                     to="/shop"
                     className="mt-1 inline-block dark:bg-[#eeeeec] dark:border-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white dark:hover:border-white hover:bg-black hover:border-black px-5 py-1.5 bg-[#1b1b18] rounded-sm border border-black text-white text-sm leading-normal"
                   >
                    Forget Password
                   </Link>
                 </li>
               </ul>
                </form>
             </div>
   
             <div className="bg-[#fff2f2] dark:bg-[#1D0002] relative rounded-t-lg lg:rounded-t-none lg:rounded-r-lg aspect-[335/376] lg:aspect-auto w-full lg:w-[438px] shrink-0 overflow-hidden border border-gray-200 lg:border-l-0">
                 <img
                 src="https://static.vecteezy.com/system/resources/previews/016/462/187/original/forgot-the-password-illustration-concept-on-white-background-vector.jpg"
                 alt="Shopping"
                 className="w-full h-full object-cover"
               />
             </div>
           </main>
         </div>
       </div>
     );
}

export default Forget_password;