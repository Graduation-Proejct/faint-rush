import React from "react";
import { ReactComponent as TG } from "../../assets/svgs/togglex.svg";
import dd from "../../assets/svgs/takecarerV2.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  setValid,
} from "../../redux/userSlice";


export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout=()=>{
    
    localStorage.clear(); 
    dispatch(setValid(false))
  
    window.location.reload()
  }
  return (
    <>
      <div className="flex justify-center  pb-3 h-auto  max-w-xl w-full relative  bg-patienthome rounded-b-3xl ">
        <div className=" flex flex-col pt-20  ">
          <div className="">
            <img
              src={dd}
              className="  rounded-full border-white bg-green-300 w-12 h-12 border-4 m-auto absolute  right-5 top-5"
            ></img>

<button onClick={logout} className="  pl-2 rounded-full  w-10 h-12 m-auto absolute  left-5 top-5">
              <TG/></button>

          </div>

          <div className="flex flex-col  ">
            <h4 className="flex font-mono text-3xl font-extrabold text-crazyblue mb-2 items-start">
              Good Evening,
              <br></br>
              {user.username}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
