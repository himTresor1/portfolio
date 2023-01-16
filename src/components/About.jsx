import React from 'react'
import Navbar from './Navbar'

function About ( ) {
    return (
            <div>
                <Navbar/>
                <div className=" flex main ">
                    <div className=" h-full w-[20%] bg-red-600 one ">s</div>
                    <div className="  h-full w-[60%] bg-green-600 two">s</div>
                    <div className=" h-full w-[20%] bg-blue-600 three">s</div>
                </div>
            </div>
    )

}
export default About