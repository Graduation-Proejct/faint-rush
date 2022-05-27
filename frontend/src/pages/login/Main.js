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
} from "../../redux/counterSlice";

export default function Main() {
  const user = useSelector((state) => state.user);
  console.log("000user" , user)
  const items = useSelector((state) => state.items);
  const fireBaseServer = useSelector((state) => state.user.fireBaseServer)
  var isNew = true;
  const [value, setValue] = useState("initial");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("email");
    const loggedInUserPass = localStorage.getItem("password");
    console.log("useEffect");
    if (loggedInUser && loggedInUserPass) {
      isNew = true;
      console.log(loggedInUser);
      console.log(loggedInUserPass);

      dispatch(setEmail(loggedInUser));
      dispatch(setPassword(loggedInUserPass));

      //check();
      //const foundUser = JSON.parse(loggedInUser.toString);
      //const foundUser2 = JSON.parse(loggedInUserPass.toString);

      // console.log(foundUser)
      // setUser({username:loggedInUser,password:loggedInUserPass});
    }
  }, [value]);

  const navigateToPatientHome = (e) => {
    e.preventDefault();
    isNew = true;
    console.log("in" + isNew);
    check();
  };

  //  if user valid  set props of user
  async function check() {
    dispatch(setLoading(true));

    let result = await isValid();
    if (!result) {
      toast.error("something wrong");
      return;
    }
    console.log("is login valid? " + result);
    dispatch(setValid(result));
    console.log("is it new data? " + isNew);

    if (isNew) {
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
    }

    if (result) {
      console.log("jjkdfkjj" + user.email);
      await axios
        .post(
          "https://faintbaseapp.herokuapp.com/user_data",
          { email: user.email }
        )
        .then(async (response) => {
          console.log(response.data);
          dispatch(setUsername(response.data.name));
          dispatch(setEmail(response.data.email));
          dispatch(setPassword(response.data.password));

          dispatch(setPhone(response.data.phone));
          dispatch(setType(response.data.type));

          const list = [];
          const emailList = response.data.emailList;
          await getUsers(emailList,response);

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
  async function getUsers(emailList, oldRes) {
    let list = [];
    console.log(emailList.length);
    for (let i = 0; i < emailList.length; i++) {
      await axios
        .post(
          "https://faintbaseapp.herokuapp.com/user_by_email",
          { email: emailList[i] },
          { timeout: 2000 }
        )
        .then((response) => {
          console.log(i + " user");
          console.log(response.data);
          list[i] = response.data;
        });
    }
    console.log("returning list");
    dispatch(setList(list));
    dispatch(setLoading(false));
    console.log("user returned:\n" + oldRes.data.name);
    navigating(oldRes);
  }
  function navigating(response) {
    if (response.data.type === "patient") {
      navigate("/patienthome");
    } else {
      navigate("/caretaker");
    }
  }
  // check  if user valid in login page
  async function isValid() {
    var emailx = user.email;
    var passwordx = user.password;

    if (!isNew) {
      emailx = localStorage.getItem("email");
      passwordx = localStorage.getItem("password");
     dispatch(setEmail(emailx))
    }
    const article = { email: emailx, password: passwordx };
    console.log(article);
    return await axios
      .post("https://faintbaseapp.herokuapp.com/login", article)
      .then((response) => {
        console.log(response.data);
        if(response.data.UID!="error"){
          dispatch(setUID(response.data.UID))
          return true}
        else{return false}
        
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
