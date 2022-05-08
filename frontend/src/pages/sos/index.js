import React from "react";



export default function Faint() {
  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();

  return (
    <div className="flex flex-col items-center ">
      <div className=" pt-14  pb-6 h-screen font-mon flex flex-col items-center max-w-lg w-full bg-[#F75010]">
        <span className="block text-white font-bold font[Helvetica] text-[40px]">S.O.S </span>
        <span className=" pt-10 block text-white font-bold font[Helvetica] text-[23px]">Mahmoud fainted on: {showTime}</span>
        <span className="block text-white font-bold font[Helvetica] text-[23px]">(around 30 seconds ago)</span>

        <div className=" ml-6 pt-28 pb-4  flex flex-col items-start gap-2 ">
          <span className=" block pb-2 text-white font-bold font[Helvetica] text-[40px]">Act Quickly</span>

          <span className=" text-left text-white font-bold font[Helvetica] text-[23px]">-Call an Ambulance 911</span>
          <span className=" text-left text-white font-bold font[Helvetica] text-[23px]">- Access Mahmoud's current location</span>
          <span className="text-left text-white font-bold font[Helvetica] text-[23px]">-Notify the rest of the emergency list</span>
          <span className="text-left text-white font-bold font[Helvetica] text-[23px]">- Access Mahmoud's medical history</span>

        </div>
        <button className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon">Cancel</button>
  

        
        

      </div>


    </div>
  );
}
