import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ar from "../../assets/alarm.mp3";
import { useEffect, useState } from "react";

export default function Faint() {
  const [audio] = useState(new Audio(ar));
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    audio.loop = true;

    audio.autoplay = true;

    audio.muted = false;

    playing ? audio.play() : audio.pause();

    //console.log("sdcdcszx");
    window.onpopstate = function (event) {
      //window.alert("sd")
      audio.pause();
    };
  }, [playing]);
  const user = useSelector((state) => state.user);
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
  const reset = () => {};
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

          {user.type != "patient" && (
            <button
              className="w-24 h-10 rounded-2xl bg-red-900  text-black font-bold font-mon"
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
