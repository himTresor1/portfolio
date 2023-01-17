import React from 'react'
import Navbar from './Navbar';
import sentmessage from "../assets/sentmessage.svg"
import socialmedia from "../assets/socialmedia.svg"

function ReachOut ( ) {
    return (
            <div>
                <Navbar/>
                <div className="secondmain  h-screen flex flex-row">
                    <div className=" w-[20%]   flex   justify-center items-center svg1">
                        <img src={sentmessage}alt="" />
                    </div>
                    <div className="  flex flex-col w-[60%]  justify-center items-center  form">
                                    <div className="intro">
                                        <h1 className='text-[2rem] font-bold'>Reach out</h1>
                                    </div>
                                    <div className="form">
                                        <form  className=" flex flex-col  my-[4rem] "action="">
                                                <input className="w-[792px] h-[128px] border-solid border-3  border-black rounded-lg  my-[2rem]" type="text"  for="Email"  id='email'/>
                                                <input  className="w-[792px] h-[333px] border-solid border-3m border-black-400 rounded-lg" type="  message"  for="message" id='message'/>
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