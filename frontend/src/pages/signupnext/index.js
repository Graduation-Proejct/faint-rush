import React from "react";

import Logo from "../../components/SVG/Logo";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setUsername,
  setValid,
  setItemName,
  setItemRlation,
  setItemPhone,
  setPhone,
  setType,
} from "../../redux/userSlice";
import { useState } from "react";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setList,
} from "../../redux/counterSlice";

export default function SignUpNext() {
  const items = useSelector((state) => state.items);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [history, setHistory] = useState("");

  //console.log(",mm"+items.list)
  //console.log("mm"+items.list.length)

  const handleAttach = (e) => {
    setFiles(e.target.files);
  };
  //handle all input and send to server
  const handlesAll = (e) => {
    e.preventDefault();
    if (files.length <= 10) {
      console.log(files);
      const data = new FormData();
      const len = files.length;

      if (len > 10) {
        len = 10;
      }

      for (let i = 0; i < len; i++) {
        data.append("file", files[i]);
      }

      //  send files to server

      // axios.post('localhost:8000/upload',data)
      //     .then((e)=>{
      //       console.log('Success')
      //     })
      //     .catch((e)=>{

      //       console.log('Error',e)

      //     })

      navigate("/patienthome");
    } else {
      toast.success("max number of files is 10 files");
    }
  };

  return (
    <div className="pt-10 h-screen font-mon flex flex-col  items-center  ">
      <div className="flex flex-col items-center gap-5">
        <Logo />
        <Header />
      </div>
      <Main />

      <div className="flex flex-col  max-w-md w-full items-start ">
        <textarea
          className="  mx-2  w-[360px] h-28 rounded-2xl shadow-lg border-2 border-gray-400 "
          placeholder=" Enter a brief about your medical history..."
          onChange={(e) => {
            setHistory(e.target.value);
          }}
        ></textarea>

        <h1>
          <span className="text-xl  pl-5 font-bold text-sec">
            Important Papers*
          </span>
        </h1>

        <div className="flex flex-row  pl-5 justify-center ">
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
      <button
        className=" mt-3 w-28 h-6 rounded-xl text-white font-bold text-[8px] bg-crazyblue"
        onClick={handlesAll}
      >
        done
      </button>
    </div>
  );
}
