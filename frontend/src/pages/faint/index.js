import React, { useCallback, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ar from "../../assets/alarm.mp3";
import { useEffect, useState } from "react";
import { SocketContext } from "../../services/Socket";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";

import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setMedicalHistory,
  setQuestions,
} from "../../redux/counterSlice";

export default function Faint() {
  console.count("Faint");
  const [ audio ] = useState(new Audio(ar));
  const [ playing, setPlaying ] = useState(true);
  const [ faintActivated, setFaintActivated ] = useState(false);
  const socket = useContext(SocketContext);
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);
  const date = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const updateFaintActivated = useCallback(() => {
    setFaintActivated(true);
  }, []);
  const goHOME = useCallback(
    () => {
      audio.pause();
      if (user.type == "patient") {
        navigate("/patienthome");
      } else {
        navigate("/caretaker");
      }
    },
    [ user, audio, navigate ]
  );
  // useEffect(() => {
  //   socket.on("faint-alarm", updateFaintActivated);

  //   return () => {
  //     socket.off("faint-alarm");
  //   };
  // }, []);
  useEffect(
    () => {
      socket.on("reset", () => {
        goHOME();
      });
      return () => {
        socket.off("reset");
      };
    },
    [ socket, goHOME ]
  );

  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const accessINFO = async() => {
    audio.pause();
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

  // do reset
  const reset = () => {
    socket.emit("reset");
    goHOME();
  };
  const IAmFine = () => {
    socket.emit("i-am-fine");
    goHOME();
  };
 // navigate("/faint");
  
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
          FAINT DETECTED!
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
            className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
            onClick={goHOME}
          >
            Cancel
          </button>

          {user.type === "patient" ? (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
              onClick={reset}
            >
              {user.type === "patient" ? "I'm Fine" : "reset"}
            </button>
          ) : null}
          {/* {user.type === "patient" && !faintActivated ? (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
              onClick={IAmFine}
            >
              I'm Fine
            </button>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
