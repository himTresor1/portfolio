import React from "react";
function Home(){
    return(

    <div  className="flex ">
       <div className="left w-[45%] ">

       <div className="intro-phrase flex flex-col   justify-center  h-[600px]  pl-[5rem]"> 
        <div className=" flex  justify-start h-[10rem] blend">
        <h1 className="text-black text-[8rem]  font-semibold w-[40%]   ">blend</h1>
        <div className="h-[3px] bg-black w-[50%] mt-[8rem] "></div>
        </div>
        <div className=" h-[10rem] everything"><h1 className="text-black text-[8rem]  font-bold  ">everything</h1> </div>
        <div className=" flex  justify-start items-center h-[10rem] ">
        <div className="h-[3px] bg-black w-[55%] mt-[5rem] "></div>
        <h1 className="text-black text-[8rem]  font-bold w-[40%]   ">great</h1>
        </div>
   
     
        </div>
        <div className="  bg-yellow-400 h-[400px] mini-explanatory">

        </div> 
       
       </div>
       <div className=" bg-blue-400 w-[55%] right">
            <h1>sdj</h1>

       </div>
    </div>

    )

}

 export  default Home;