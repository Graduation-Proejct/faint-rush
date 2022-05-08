import React from "react";
import { ReactComponent as TG } from "../../assets/svgs/togglex.svg"
import dd from "../../assets/svgs/patient.png"

import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setEmail,setPassword, setUsername,setValid } from "../../redux/userSlice"

import Modal2 from "../../components/library/Modal2";


export default function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  //notify every one in the list
  const notifyEmergencylist =()=>{
    window.alert("hi mo")
    navigate("/sos")
    
  }
  
  const cancel =()=>{
    setShowModal(false);
   
  }
  return (
    <>
         {(showModal)&& <Modal2 handlesNotify={notifyEmergencylist} handlesCancel={cancel}/>}

      <div className="flex justify-center   h-auto  max-w-xl w-full relative  bg-patienthome rounded-b-3xl">

        <div className=" flex flex-col pt-20 items-center " >
          <div className="">
           
            <img src={dd} className="  rounded-full border-white  w-12 h-12 border-4 m-auto absolute  right-0 top-0"></img>

            <button className=" pl-2 rounded-full  w-12 h-12 m-auto absolute  left-0 top-0">
              <TG/></button>

          </div>


         <div className="flex  flex-col justify-center ">

         <div className="flex flex-col items-start ml-10 ">
          <h4 className="flex font-mono text-3xl font-extrabold text-crazyblue mb-2  " >Good Evening,
            <br></br>
              {user.username}</h4>
          
            <span className="text-prim2 block" >Your target for today is to keep positive</span>
            <span className="text-prim2 block"> mindset and smile to everyone you meet.</span>

            

          </div>
          <div className="mt-4 mb-6 flex flex-row">
           
            <button className="  rounded-2xl w-40 h-10 bg-red-700 text-white text-xs font-bold " 
            onClick={() => setShowModal(true)}> Not feeling well?</button>

            <button className= "ml-2  rounded-2xl  w-52 h-10 bg-crazyblue text-white text-xs  font-bold "
            >EDIT EMERGENGY LIST</button>

          </div>
         </div>

            

        </div> 

      </div>

  

    </>
  );
}
