import React from 'react'
import Navbar from './Navbar'
import main from "../assets/main.png"

function About ( ) {
    return (
            <div>
                <Navbar/>
                <div className=" flex main h-screen">
                    <div className=" h-full w-[20%] bg-red-600 one ">xcvs</div>
                    <div className="  h-full  w-[60%] bg-green-600 two">
                        <div className="upper flex  flex-col justify-center items-center">
                            <h1 className='font-bold text-[3rem] text-[#535050] '>AMIZERO TRESOR</h1>
                            <h1 className='font-bold text-[3rem] text-[#535050]'>UI/UX DESIGNER BASED IN RWANDA</h1>
                        </div>
                        <div className="lower flex flex-row h-[86.5%]">
                            <div className=" h-[100%] w-[25%]  bg-red-100 descriptions1"></div>
                            <div className=" h-[100%]  flex justify-center items-center w-[50%] bg-blue-200 picture">
                                <img src={main} alt="" />
                            </div>
                            <div className="h-[100%] w-[25%] bg-black descriptions2"></div>
                        </div>
                    </div>
                    <div className=" h-full w-[20%] bg-blue-600 three">s</div>
                </div>
            </div>
    )

}
export default About