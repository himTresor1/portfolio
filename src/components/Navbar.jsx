import React from "react";
import { render } from "react-dom";
import logo from "../assets/logo.svg"
 function Navbar(){
    return(
        <nav className=" w-full flex px-10  py-6 justify-evenly border-b-[3px] border-black items-center navbar flex flex-row  h-[120px]">
             <img src={logo} alt="hoobank" className="w-[200px] h-[72px]" />

             <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                <li   className="m-10 font-bold text-xl "><a href="">Home</a></li>
                <li  className="m-10 font-bold text-xl" ><a href="">About</a></li>
                <li   className="m-10 font-bold text-xl" ><a href="">My Work</a></li>
                <li  className="m-10 font-bold text-xl" ><a href="">Reach out</a></li>
              
             </ul>
    

        </nav>
    )
 }
  export default Navbar ;