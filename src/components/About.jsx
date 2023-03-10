import React from "react";
import Navbar from "./Navbar";
import main from "../assets/main.png";
import webdesign from "../assets/webdesign.png"
import womanHotel from "../assets/womanHotel.png"
import upload from "../assets/upload.png"
import computerheadset from "../assets/computerheadset.png"
import artificialintelligence from "../assets/artificialintelligence.png"
import Figma from "../assets/Figma.svg"
import ae from "../assets/ae.svg"
import id from "../assets/id.svg"
import ai from "../assets/ai.svg"
import xd from "../assets/xd.svg"
import lr from "../assets/lr.svg"
import ps from "../assets/ps.svg"

import "../App.css"

function About() {
  return (
    <div>
      <Navbar />
      <div className=" flex main h-screen">
        <div className=" h-full w-[20%]  mt-[8rem]  pl-[8rem] flex flex-col one ">
                <img className="mt-[3rem] h-[16rem] w-[20rem]"src={upload} alt="" />
                <img  className="mt-[3rem] h-[16rem] w-[16rem] mt-[10rem]" src={computerheadset} alt="" />
        </div>
        <div className="  h-full mt-[4rem]  w-[60%]  two">
          <div className="upper flex  leading-[3rem] flex-col justify-center items-center">
            <h1 className="font-bold text-[3.5rem] text-[#535050] ">
              AMIZERO TRESOR
            </h1>
            <h1 className="font-bold text-[3.5rem] text-[#535050]">
              UI/UX DESIGNER BASED IN RWANDA
            </h1>
          </div>
          <div className="lower flex flex-row h-[86.5%]">
            <div className=" h-[100%] w-[27%]   flex flex-col descriptions1">
              <div className="oned mt-[5rem] ml-[8rem]">
                <h1 className="font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  BIOGRAPHY
                </h1>
                <p className="font-semibold  leading-[1.5rem]   text-[21px] ">
                  I design for clarity <br /> and money <br /> I am Amizero
                  Tresor , <br /> a UI/UX designer <br /> based in Rwanda
                </p>
              </div>

              <div className="oned mt-[7rem]  ml-[5rem]">
                <h1 className="font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  BIOGRAPHY
                </h1>
                <p className="font-semibold  leading-[1.5rem]   text-[21px] ">
                  I design for clarity <br /> and money <br /> I am Amizero
                  Tresor , <br /> a UI/UX designer <br /> based in Rwanda
                </p>
              </div>

              <div className="oned  mt-[7rem]  ml-[8rem]">
                <h1 className="font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  BIOGRAPHY
                </h1>
                <p className="font-semibold  leading-[1.5rem]   text-[21px] ">
                  I design for clarity <br /> and money <br /> I am Amizero
                  Tresor , <br /> a UI/UX designer <br /> based in Rwanda
                </p>
              </div>
            </div>
            <div className=" h-[100%]  flex justify-center items-center w-[46%]  picture">
              <img src={main} className="h-[95%] w-[100%]" alt="" />
            </div>
            <div className="h-[100%] w-[27%] descriptions2">
              <div className="oned mt-[5rem]  flex  flex-col justify-center items-center pr-[3rem]   ">
                <div className="headings1 flex flex-col items-end w-[10rem] ">
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  YEARS
                </h1>
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  OF EXPERIENCE
                </h1>
                </div>
                <p className="font-semibold  leading-[1.5rem]   text-[9rem] ">
                  2
                </p>
              </div>

              <div className="oned mt-[7rem]  ml-[5rem]  flex  flex-col justify-center items-center pr-[3rem]   ">
                <div className="headings1 flex flex-col items-end w-[10rem] ">
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  CLIENTS
                </h1>
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  SATISFACTION
                </h1>
                </div>
                <p className="font-semibold  leading-[1.5rem]    mt-6 text-[9rem] ">
                  100%
                </p>
              </div>

              <div className="oned mt-[12rem]   flex  flex-col justify-center items-center pr-[3rem]   ">
                <div className="headings1 flex flex-col items-end w-[10rem] ">
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                  FINISHED
                </h1>
                <h1  className=" flex  font-semibold text-[#699A9D] text-[21px]  mb-[1rem] ">
                 PROJECTS
                </h1>
                </div>
                <p className="font-semibold  leading-[1.5rem]   text-[9rem] ">
                  7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-[20%] three pt-[10rem]">
            <img className="mt-[3rem]"src={webdesign} alt="" />
            <img className="mt-[3rem]"src={womanHotel} alt="" />
            <img className="mt-[3rem]"src={artificialintelligence} alt="" />
        </div>
      </div>
      <div className="  flex  flex-row justify-evenly cards h-[20rem] w-full  mt-[2rem] px-[2rem]">
        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={Figma} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">FIGMA</h1>
          <p className="font-bold text-[4rem] ">83%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={ps} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe Photoshop</h1>
          <p className="font-bold text-[4rem] ">90%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={xd} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe XD</h1>
          <p className="font-bold text-[4rem] ">88%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={ae} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe After Effects</h1>
          <p className="font-bold text-[4rem] ">70%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={lr} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe Lightroom</h1>
          <p className="font-bold text-[4rem] ">80%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={id} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe Indesign</h1>
          <p className="font-bold text-[4rem] ">79%</p>
        </div>
        </div>


        <div className="oneCard">
        <div class=" flex flex-col py-[2rem] items-center w-[15rem] h-[17.5rem]  grad">
          <img className="w-[5rem] h-[5rem]"src={ai} alt="" />
          <h1 className="font-bold text-[1.5rem] pt-[1rem]">Adobe Illustrator</h1>
          <p className="font-bold text-[4rem] ">83%</p>
        </div>
        </div>


        

      </div>
    </div>
  );
}
export default About;
