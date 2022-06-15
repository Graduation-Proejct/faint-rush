import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  setEmail,
  setPassword,
  setPhone,
  setType,
  setUsername,
  setValid,
  setList,
  setUID,
} from "../../redux/userSlice";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setCancel,
} from "../../redux/counterSlice";

export default function Main() {
  const user = useSelector((state) => state.user);
  console.log("000user", user);
  const items = useSelector((state) => state.items);
  const fireBaseServer = useSelector((state) => state.user.fireBaseServer);
  var isNew = true;
  const [value, setValue] = useState("initial");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToPatientHome = (e) => {
    e.preventDefault();
    isNew = true;
    //navigate("/getstarted");

    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);

    console.log("in" + isNew);
    isValid();
    //isValid();
  };

  // check  if user valid in login page
  async function isValid() {
    // console.log("cdjknj")
    dispatch(setLoading(true));

    var emailx = user.email;
    var passwordx = user.password;
    //console.log("dxc"+emailx)

    if (!isNew) {
      emailx = localStorage.getItem("email");
      passwordx = localStorage.getItem("password");
      // dispatch(setEmail(emailx))
    }

    const article = { email: emailx, password: passwordx };
    console.log(article);
    return await axios
      .post("https://faintbaseapp.herokuapp.com/login", article)
      .then((response) => {
        console.log(response.data);
        if (response.data.UID != "error") {
          dispatch(setUID(response.data.UID));
          dispatch(setUsername(response.data.name));
          dispatch(setEmail(response.data.email));
          dispatch(setPassword(response.data.password));
          dispatch(setPhone(response.data.phone));
          dispatch(setType(response.data.type));
          dispatch(setList(response.data.list));

          dispatch(setValid(true));

          console.log(response.data.type);
          dispatch(setLoading(false));
          if (response.data.type == "patient") {
            //console.log("in if")
            navigate("/patienthome");
          } else {
            navigate("/caretaker");
          }
        } else {
          dispatch(setLoading(false));
          return false;
        }
      });
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          navigateToPatientHome(e);
        }}
        className=" pt-8 flex justify-center  flex-col  items-center   gap-12"
      >
        <div className=" flex flex-col  gap-5">
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
