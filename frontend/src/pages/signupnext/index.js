
import axios from "axios";
import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import Main from "./Main";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpNext() {
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [history, setHistory] = useState("");

  //console.log(",mm"+items.list)
  //console.log("mm"+items.list.length)
  console.log(",mm" + history);

  const handleAttach = (e) => {
    setFiles(e.target.files);
  };
  //handle all input and send to server
  const handlesAll = (e) => {
    const temp = {
      name: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      type: user.type,
      questions: items.list,
      medicalHistory: history,
    };
    console.log(",mm" + temp.name);
    console.log(",mm" + temp);

    //  send files to server
    // user.questions=items.list;
    axios
      .post("https://faintbaseapp.herokuapp.com/signup_patient_user", temp)
      .then((response) => {
        if (response.data.UID != "error") {
          console.log(response.data.UID);
          navigate("/patienthome");
        }

        console.log("Success");
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  return (
    <div className="pt-10 h-screen font-mon flex flex-col  items-center  ">
      <div className="flex flex-col items-center gap-5 pb-10">
        <Logo />
        <Header />
      </div>
      <Main />

      <div className="flex flex-col  max-w-md w-full items-start ">
        <textarea
          className="  mx-2  w-[360px] h-40 rounded-2xl shadow-lg border-2 border-gray-400 "
          placeholder=" Enter a brief about your medical history..."
          onChange={(e) => {
            setHistory(e.target.value);
          }}
        ></textarea>

        <h1 className="hidden">
          <span className="text-xl  pl-5 font-bold text-sec">
            Important Papers*
          </span>
        </h1>

        <div className="hidden">
          <div className=" flex flex-row  pl-5 justify-center ">
            <span>Attach All Relevant Files</span>
            <label
              for="getFile"
              className=" flex flex-col
         justify-center ml-4 w-20 h-6 rounded-xl text-white font-bold text-[8px] bg-crazyblue"
            >
              <span className=" ">ATTACH</span>{" "}
            </label>
            <input
              type="file"
              id="getFile"
              onChange={handleAttach}
              multiple
              className="hidden"
            />
          </div>
          <div className="flex flex-col  pl-5 items-start   ">
            <span className=" text-gray-500 text-[10px]">
              *Important papers can be X-Rays, Medical analysis, or any paper
            </span>
            <span className=" text-gray-500 text-[10px]">
              that can be helpful incase of fainting
            </span>
          </div>
        </div>
      </div>

      <button
        className=" mt-12 w-32 h-8   rounded-xl text-white font-bold text-[10px] bg-crazyblue"
        onClick={handlesAll}
      >
        done
      </button>
    </div>
  );
}
