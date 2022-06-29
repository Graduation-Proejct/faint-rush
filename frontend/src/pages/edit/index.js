import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import Header from "./Header";
import Logo from "../../components/SVG/Logo";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

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
  setItemEmail,
  addItem,
} from "../../redux/userSlice";

export default function GetStarted() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const location = useLocation();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState(" ");



  const navigate = useNavigate();


  let idc;
  if (location.state == null) {
    console.log(location.state);
    console.log(user.list.length);

    idc = user.list.length;
    console.log("id:" + idc);
  } else {
    idc = location.state.id;
  }

  
  const navigateToPatientHome = async (e) => {
    e.preventDefault();
//
    const patient_user = {

      name: user.username,
      email: user.email,
      UID:user.UID,
      emailCaretaker:email,
    };
    console.log(patient_user);
    await axios.post("https://faintbaseapp.herokuapp.com/add_caretaker", patient_user)
    .then((response) => {

      console.log("before"+response.data);
      if(response.data){
        console.log("after"+response.data);
        dispatch(addItem({id:user.list.length+1,email:response.data.email,name:response.data.name,phone:response.data.phone}));
        navigate("/patienthome");
      }
     
    });
    //catch
console.log(user.list)
   
  };

  return (
    <>
      <div className="pt-10 h-screen flex flex-col items-center">
        <Logo />
        <Header />
        <h2></h2>

        <form
          onSubmit={(e) => {
            navigateToPatientHome(e);
          }}
          className=" flex justify-center  flex-col    m-4"
        >
          <div className=" flex  flex-col flex-grow pt-8">
            <input
              required
              className=" border-4 mb-3  justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
              type="email"
              id="relation_edit"
              value={email}
              onChange={(e) =>
                dispatch(setEmail(e.target.value))
              }
              name="email"
              placeholder="Enter the email"
            />
            <input
              required
              className="hidden border-4 mb-3 justify-center text-center placeholder:italic placeholder:text-slate-400  w-80 h-14 drop-shadow-md rounded-2xl"
              type="text"
              name="name"
              value={name}
              onChange={(e) =>
                dispatch(setName(e.target.value))
              }
              placeholder="Enter name"
            />
            <input
              required
              className=" hidden border-4 mb-3 justify-center text-center placeholder:italic placeholder:text-slate-400  w-80 h-14 drop-shadow-md rounded-2xl"
              type="number"
              name="phone"
              value={phone}
              onChange={(e) =>
                dispatch(setPhone(e.target.value))
              }
              placeholder="Enter phone"
            />
          </div>

          <div className="pt-4">
          <Button   text="Done" />
          </div>
        </form>
      </div>
    </>
  );
}
