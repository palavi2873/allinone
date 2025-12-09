import React from "react";
import {Link} from "react-router-dom";

const Header=()=>
{
    const isLoggedIn=false;
    return(<>
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
                to="/register"
                className="inline-block px-5 py-1.5 dark:text-[#EDEDEC] border-[#19140035] hover:border-[#1915014a] border text-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#62605b] rounded-sm text-sm leading-normal"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>);    
}
export default Header;