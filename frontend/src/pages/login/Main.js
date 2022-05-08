import React from "react";
import axios from "axios";

import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setPhone,
  setType,
  setUsername,
  setValid,
  setList,
} from "../../redux/userSlice";

export default function Main() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToPatientHome = (e) => {
    e.preventDefault();
    check();
  };

  //  if user valid  set props of user 
  async function check() {
    let result = await isValid();
    dispatch(setValid(result))
    if (result) {
      fetch("http://localhost:8080/signupdata")
      .then((response) => response.json())
      .then((data) => {
      dispatch(setUsername(data.name))
      dispatch(setEmail(data.email))
      dispatch(setPassword(data.password))
      dispatch(setPhone(data.phone))
      dispatch(setType(data.type))
     // dispatch(setList(data.list))





        // myuser=data;
        console.log(data);
        console.log("hi:"+data.name);
        if(data.type==='patient'){navigate("/patienthome");}else{
          navigate("/caretaker")
        }
      });
          
        
      
    }
  }
// check  if user valid in login page
  function isValid() {
    const article = { email: user.email, password: user.password };
    return axios
      .post("http://localhost:8080/logindata", article)
      .then((response) => {
        console.log(response.data);

        return response.data;
      });
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          navigateToPatientHome(e);
        }}
        className=" flex justify-center  flex-col  items-center   gap-4"
      >
        <div>
          <input
            required
            className=" border-4 justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="text"
            name="email"
            onChange={(e) => {
              dispatch(setEmail(e.target.value));
            }}
            placeholder="Enter your email"
          />
          <input
            required
            className=" border-4 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            onChange={(e) => {
              dispatch(setPassword(e.target.value));
            }}
            type="password"
            name="password"
            placeholder="Password"
            start
          />
        </div>

        <Button text="LOGIN" />
      </form>
    </>
  );
}
