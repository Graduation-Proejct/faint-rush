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
} from "../../redux/userSlice";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
} from "../../redux/counterSlice";

export default function Main() {
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);
    var isNew=false;
    const [value, setValue] = useState('initial');
 // const [password, setPassword] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("email");
    const loggedInUserPass = localStorage.getItem("password");
      console.log("useEffect")
    if (loggedInUser && loggedInUserPass) {
      isNew=false;
      console.log(loggedInUser);
      console.log(loggedInUserPass);

      dispatch(setEmail(loggedInUser));
      dispatch(setPassword(loggedInUserPass));

      check();
      //const foundUser = JSON.parse(loggedInUser.toString);
      //const foundUser2 = JSON.parse(loggedInUserPass.toString);

      // console.log(foundUser)
      // setUser({username:loggedInUser,password:loggedInUserPass});
    }
  }, [value]);

  const navigateToPatientHome = (e) => {
    e.preventDefault();
   isNew=true;
    console.log("in"+isNew)
    check();
  };

  //  if user valid  set props of user
  async function check() {
    dispatch(setLoading(true));

    let result = await isValid();
    if (!result) {
      toast.error("something wrong");
    }
    console.log("hi" + result);
    dispatch(setValid(result));
    console.log("hisNewDatai" + isNew);

    if (isNew) {
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
    }
    if (result) {
      await axios
        .post(
          "http://localhost:8080/user_data",
          { email: user.email },
          { timeout:1000 }
        )
        .then((response) => {
          console.log(response.data);
          dispatch(setUsername(response.data._name));
          dispatch(setEmail(response.data._email));
          dispatch(setPassword(response.data._password));

          dispatch(setPhone(response.data._phone));
          dispatch(setType(response.data._type));
          dispatch(
            setList(
              typeof response.data._list === "undefined"
                ? []
                : response.data._list
            )
          );
          dispatch(setLoading(false));

          console.log("user returned:\n" + response.data.name);
          navigating(response);
        })
        .catch((err) => {
          //console.log("55" + err.code);
          //console.log("33" + err.message);
          //console.log("111" + err.stack);
          if (err.code == "ECONNABORTED") {
            dispatch(setLoading(false));
            toast.error("Connection Timed out");
          }
        });
    }
  }
  function navigating(response) {
    if (response.data._type === "patient") {
      navigate("/patienthome");
    } else {
      navigate("/caretaker");
    }
  }
  // check  if user valid in login page
  async function isValid() {
    var emailx=user.email;
    var passwordx=user.password;

    if(!isNew){
      emailx = localStorage.getItem("email");
   passwordx = localStorage.getItem("password");}
    const article = { email: emailx, password: passwordx };
    console.log(article)
    return await axios
      .post("http://localhost:8080/login", article)
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
