import React from "react";
import Navbar from "./Navbar";

import tresor from "../assets/tresor.png"

import shoot from "../assets/shoot.svg"
function Home() {
  return (
    <div>
    <Navbar/>
    <div className="flex ">
      <div className="left w-[45%] ">
        <div className="intro-phrase flex flex-col   justify-center  h-[600px]  pl-[5rem]">
          <div className=" flex  justify-start h-[10rem] blend">
            <h1 className="text-black text-[8rem]  font-semibold w-[40%]   ">
              blend
            </h1>
            <div className="h-[3px] bg-black w-[50%] mt-[8rem] "></div>
          </div>
          <div className=" h-[10rem] everything">
            <h1 className="text-black text-[8rem]  font-bold  ">everything</h1>{" "}
          </div>
          <div className=" flex  justify-start items-center h-[10rem] ">
            <div className="h-[3px] bg-black w-[55%] mt-[5rem] "></div>
            <h1 className="text-black text-[8rem]  font-bold w-[40%]   ">
              great
            </h1>
          </div>
        </div>
        <div className=" flex  flex-col  justify-center items-center h-[300px] text-[1rem] font-bold mini-explanatory  ">
            <p className="h-[8rem]">
                    I am a  pro UI/UX  designer  and motions designer &#128151; <br />
                    Uhmm , I design my own legacies  and uhmmm    &#9804; <br/>
                    I am welcome to work with you I know &#128514;   <br/>
                    Hhhh , I am AMIZERO TRESOR &#129409; 
            </p>
            <button className="bg-black h-[4rem] w-[13rem] text-white   ">DOWNLOAD CV </button>
        </div>
      </div>
      <div className="  pt-[2rem]  flex w-[55%] right">
                <div className=" w-[30%]   justify-center pt-[15rem] h-full sticker">   
                <img src={shoot} alt=""  /></div>
                <div className="svg">
                    <img src={tresor} alt="" />
                </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
