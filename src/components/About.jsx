import React from "react";
import Navbar from "./Navbar";
import main from "../assets/main.png";

function About() {
  return (
    <div>
      <Navbar />
      <div className=" flex main h-screen">
        <div className=" h-full w-[20%] bg-red-600 one ">xcvs</div>
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
        <div className=" h-full w-[20%] three">s</div>
      </div>
    </div>
  );
}
export default About;
