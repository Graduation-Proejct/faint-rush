import React from "react";
import axios from "axios";

import Button from "../../components/library/Button";
import Notification from "../../components/library/notification";

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
  setUID,
} from "../../redux/userSlice";
import { ReactComponent as Spinner } from "../../assets/svgs/spinner.svg";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setList,
  setIsNot,
} from "../../redux/counterSlice";

export default function Main() {
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);
  const [test, setTest] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  //  navigate To sign up next  Or TakeCare Home and post data to user if is caretaker

  const navigateToPatienOrTakeCaretHome = async (e) => {
    e.preventDefault();

    if (user.type == "caretaker") {
      const article = {
        name: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone,
        type: user.type,
        list: user.list,
      };

      // set local data
      // console.log(" jhjk"+response.data._password)
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
      ///////////
      await axios
        .post("https://faintbaseapp.herokuapp.com/signup", article)
        .then((response) => {
          console.log("returned value is " + response.data.UID);
          console.log("is loading or not?" + items.loading);
          var bb = false;
          if (response.data.UID != "error"&&response.data.UID !=false) {
            bb = true;
            console.log("---------------------------")
            console.log(response.data.UID==false)

            dispatch(setUID(response.data.UID));
          }

          if (bb === true) {
            if (user.type == "caretaker") {
              dispatch(setValid(true));
             // navigate("/caretaker");
            }
          } else {
            dispatch(setIsNot(true));
            showNotification();
          }
        });
    } else {
      const article = {
        name: user.username,
        email: user.email,
        password: user.password,
        phone: user.phone,
        type: user.type,
        list: user.list,
      };
      await axios
        .post("https://faintbaseapp.herokuapp.com/signup", article)
        .then((response) => {
          console.log("d " + response.data);

          if (response.data === true) {
            if (user.type == "patient") {
              dispatch(setValid(true));
              navigate("/signupnext");
            }
          } else {
            dispatch(setIsNot(true));
            showNotification();
          }
        });
      //dispatch(setValid(true));
      //navigate("/signupnext");
    }
  };
  const showNotification = async () => {
    setTimeout(() => {
      console.log("setNot : " + test);
      dispatch(setIsNot(false));
    }, 3000);

    console.log("inside showNot");

    console.log("setNot : " + test);
  };
  // set text of button based on type of user
  function getText() {
    if (user.type == "caretaker") {
      return "sign up";
    } else {
      return "next";
    }
  }

  //const [name, setName] = useState("");
  const handleSubmit = (event) => {};
  if (items.loading) {
    console.log(items.loading);

    return <Spinner />;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          navigateToPatienOrTakeCaretHome(e);
        }}
        className=" flex justify-center  flex-col  items-center   gap-4"
      >
        <div>
          <input
            required
            className="border-4  mb-3 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => dispatch(setUsername(e.target.value))}
            start
          />
          <input
            required
            className="border-4 justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="email"
            name="email"
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="Email"
          />
          <input
            required
            className="border-4 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="tel"
            name="phone"
            onChange={(e) => dispatch(setPhone(e.target.value))}
            placeholder="Phone"
            start
          />

          <input
            required
            className="border-4 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="password"
            name="password"
            onChange={(e) => dispatch(setPassword(e.target.value))}
            placeholder="Password"
            minLength="6"
            start
          />
        </div>

        <Button text={getText()} />
      </form>

      <Notification notify={items.isNot} text={" Invalid email address !"}></Notification>
    </>
  );
}
