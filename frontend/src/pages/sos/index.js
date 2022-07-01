import React, { Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useEffect, useState } from "react";
import axios from "axios";

import ar from "../../assets/alarm.mp3";
//import { socket } from "../../services/Socket";
import { useCallback, useContext, useEffect, useState } from "react";
import { SocketContext } from "../../services/Socket";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setMedicalHistory,
  setQuestions,
} from "../../redux/counterSlice";

export default function SOS() {
  const items = useSelector((state) => state.items);

  const [ audio ] = useState(new Audio(ar));
  const [ playing, setPlaying ] = useState(true);
  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);
  
  const socket = useContext(SocketContext);

  const [joined, setJoined] = useState(false);
  useEffect(
    () => {
      audio.loop = true;

      playing ? audio.play() : audio.pause();
      console.log("sdcdcszx");
      window.onpopstate = function(event) {
        //window.alert("sd")
        audio.pause();
      };
    },
    [ playing ]
  );
   useEffect(()=>{
    socket.on("reset", () => {
      console.log("sos-caretaker")
      goHOME()});
    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off("join", handleInviteAccepted);
    };
   },[socket])

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = new Date();
  // show time
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  // navigate to home


  const accessINFO =async () => {
    audio.pause();
    console.log("gfcvhbjkl;kjhmgfbcnjmkl,khbgfvbnjkm,gvfbbm,.bv")
    console.log(user.UID)
    dispatch(setLoading(true))
    var temp ={UID :user.UID}
    await axios
    .post("https://faintbaseapp.herokuapp.com/sos_patient", temp)
    .then((response) => {
      console.log("before" + response.data);
      if (response.data) {
        console.log("-------------")
        console.log( response.data.questions);
        console.log( "ssss"+response.data.medicalHistory);
      // after fix uncommet code and then put data at  info page  
          dispatch(setQuestions(response.data.questions));
          dispatch(setMedicalHistory(response.data.medicalHistory))

       
      }
    }); 
    setLoading(false)
    navigate("/info");
  };
  const goHOME = () => {
    audio.pause();
    if (user.type == "patient") {
      navigate("/patienthome");
    } else {
      navigate("/caretaker");
    }
  };
  // do reset
  const reset = () => {
    socket.emit("reset", { message: "reset" });
    goHOME();
  };

  
  if (items.loading) {
    return (
      <div className=" flex flex-col gap-5">
        <div className="flex h-screen flex-col  justify-center  ">
          <div className="  justify-center">
            <Spinner />
          </div>
        </div>
       
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center ">
      <div className=" pt-8  pb-6 h-screen font-mon flex flex-col items-center max-w-md w-full bg-[#F75010]">
        <span className="block text-white font-bold font[Helvetica] text-[40px]">
          S.O.S
        </span>
        <span className=" pt-5 block text-white font-bold font[Helvetica] text-[23px]">
          The Patient Fainted on: {showTime}
        </span>

        <div className=" ml-6 pt-16 pb-4  flex flex-col items-start gap-2 ">
          <span className=" block pb-2 text-white font-bold font[Helvetica] text-[40px]">
            Act Quickly
          </span>

          <span className=" text-left text-white font-bold font[Helvetica] text-[23px]">
            -Call an Ambulance 911
          </span>

          <span className="text-left text-white font-bold font[Helvetica] text-[23px]">
            -Notify the rest of the emergency list
          </span>

          {(user.type != "patient")&&<span
            className="text-left  text-white font-bold font[Helvetica] text-[23px] underline"
            onClick={accessINFO}
          >
            - Access Patient's medical history
          </span>}
        </div>
        <div className="flex flex-row gap-5 pt-32">
          <button
            className="w-24 h-10 rounded-2xl bg-red-900  text-white font-bold font-mon mr-7"
            onClick={goHOME}
          >
            Cancel
          </button>

          {user.type == "patient" && (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-white font-bold font-mon"
              onClick={reset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
