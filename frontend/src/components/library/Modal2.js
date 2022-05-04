import React from "react";

export default function Modal2(props) {
const { handlesNotify,handlesCancel  } = props;

  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto m-auto mx-7">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center   pt-5 px-5 rounded-t">
                  <h3 className=" font-extrabold text-xl font-[Helvetica] text-[#2C6975] ">
                  Notify Emergency list
                  </h3>
                  
                 
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                <span className=" block text-crazyblue  text-[8px] font-medium font-mono" >Clicking on Notify Emergency List below is like SOS action.</span>
                <span className=" block text-crazyblue text-[8px] font-medium font-mono"> Everyone on your list will be notified.</span>
                <span className=" block text-crazyblue text-[8px] font-medium font-mono">  Are you sure you want to notify them?</span>

                </div>
                {/*footer*/}
                <div className="mx-2  mb-6 flex flex-row justify-center">
           
                    <button className=" border-2 border-gray-500 rounded-2xl  px-4  w-35 h-7  text-crazyblue text-[8px] font-bold  "onClick={handlesCancel} > CANCEL</button>

                    <button className= "ml-2  rounded-2xl  px-4 h-7 bg-red-700 text-white text-[8px] font-bold "
                    onClick={handlesNotify}>NOTIFY EMERGENCY LIST
                    </button>

          </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}