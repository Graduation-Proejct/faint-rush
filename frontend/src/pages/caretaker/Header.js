import React from "react";
import { ReactComponent as TG } from "../../assets/svgs/togglex.svg";
import dd from "../../assets/svgs/patient.png";
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
  return (
    <>
      <div className="flex justify-center   h-auto  max-w-xl w-full relative  bg-patienthome rounded-b-3xl">
        <div className=" flex flex-col pt-20  ">
          <div className="">
            <img
              src={dd}
              className="  rounded-full border-white bg-black w-12 h-12 border-4 m-auto absolute  right-0 top-0"
            ></img>

            <button className=" pl-2 rounded-full  w-12 h-12 m-auto absolute  left-0 top-0">
              <TG />
            </button>
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
