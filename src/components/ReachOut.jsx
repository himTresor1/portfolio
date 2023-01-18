import React from 'react'
import Navbar from './Navbar';
import sentmessage from "../assets/sentmessage.svg"
import socialmedia from "../assets/socialmedia.svg"

function ReachOut ( ) {
    return (
            <div>
                <Navbar/>
                <div className="secondmain    fixed  h-screen flex flex-row">
                    <div className=" w-[20%]   flex   justify-center items-center svg1">
                        <img src={sentmessage}alt="" />
                    </div>
                    <div className="  flex flex-col w-[60%]   mt-[4rem] items-center  form">
                                    <div className="intro">
                                        <h1 className='text-[2rem] font-bold'>Reach out</h1>
                                    </div>
                                    <div className="form">
                                        <form  className=" flex flex-col  my-[4rem] "action="https://api.staticforms.xyz/submit">
                                                <input className="inputbox1 mt-[2rem] bg-transparent  placeholder-black  " type="text"  for="Email"  placeholder='Email'   id='email'/>
                                                <input  className="inputbox2 mt-[2rem] bg-transparent justify-center items-center  "placeholder='Message' type="  message"  for="message" id='message'/>
                                        </form>
                                    </div>
                    </div>
                    <div className=" w-[20%]  flex   justify-center items-center svg2">
                        <img src={socialmedia}alt="" />
                    </div>
                </div>
            </div>
    )

}
export default ReachOut ;