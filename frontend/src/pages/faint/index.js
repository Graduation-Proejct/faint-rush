import React, { useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ar from "../../assets/alarm.mp3";
import { useEffect, useState } from "react";
import { SocketContext } from "../../services/Socket";

export default function Faint() {
  console.count("Faint");
  const [ audio ] = useState(new Audio(ar));
  const [ playing, setPlaying ] = useState(true);
  const [ faintActivated, setFaintActivated ] = useState(false);
  const socket = useContext(SocketContext);
  const user = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.js ~ line 16 ~ Faint ~ user", user);

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
  useEffect(() => {
    socket.on("faint-alarm", () => {
      setFaintActivated(true);
    });

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off("faint-alarm", () => {
        goHOME();
      });
      return () => {
        // before the component is destroyed
        // unbind all event handlers used in this component
        socket.off("join");
        socket.off("faint-alarm");
        socket.off("are-you-ok");
      };
    };
  }, []);

  const date = new Date();
  const navigate = useNavigate();

  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const accessINFO = () => {
    audio.pause();
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
    socket.emit("reset");
    goHOME();
  };
  const IAmFine = () => {
    socket.emit("i-am-fine");
    goHOME();
  };
  navigate("/faint");
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
          <span
            className="text-left hover:bg-slate-50 text-white font-bold font[Helvetica] text-[23px]"
            onClick={accessINFO}
          >
            - Access Patient's medical history
          </span>
        </div>
        <div className="flex flex-row gap-5 pt-32">
          <button
            className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
            onClick={goHOME}
          >
            Cancel
          </button>

          {user.type === "patient" && (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
              onClick={reset}
            >
              Reset
            </button>
          )}
          {user.type === "patient" && !faintActivated ? (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
              onClick={IAmFine}
            >
              I'm Fine
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
