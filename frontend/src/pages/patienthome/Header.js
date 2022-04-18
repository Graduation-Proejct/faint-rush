import React from "react";
import { ReactComponent as TG } from "../../assets/svgs/togglex.svg"



export default function Header() {
  return (
    <>
      <div className="flex justify-center   h-2/5  max-w-xl w-full relative  bg-patienthome rounded-b-3xl">

        <div className=" flex flex-col pt-20 items-center " >
          <div className="">
           
            <image className="  rounded-full border-white bg-black w-12 h-12 border-4 m-auto absolute  right-0 top-0"></image>

            <button className=" pl-2 rounded-full  w-12 h-12 m-auto absolute  left-0 top-0">
              <TG/></button>

          </div>


          <h4 className="flex font-mono text-4xl front-bold text-crazyblue" >Good Evening,
            <br></br>
            Mahmoud</h4>
          <br></br>
          <span className="text-prim" >Your target for today is to keep positive
            <br></br>
            mindset and smile to everyone you meet.</span>

            <div className="mt-4">
           
            <button className="  rounded-2xl w-40 h-10 bg-red-700 text-white text-xs "> Not feeling well?</button>

            <button className= "ml-2  rounded-2xl  w-52 h-10 bg-crazyblue text-white text-xs  "
            >EDIT EMERGENGY LIST</button>

          </div>

        </div>

      </div>





    </>
  );
}
