import React from "react";
import axios from "axios";

import Button from "../../components/library/Button";
import { useNavigate, useLocation } from "react-router-dom";

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
} from "../../redux/userSlice";

export default function Main() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const navigateToPatienOrTakeCaretHome = (e) => {
    e.preventDefault();
    //  const myuser={};

    // console.log(myuser);

    //  const myData="ahmed";
    // const requestOptions = {
    //   method: 'post',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(myData),
    // };
    // fetch('http://localhost:8080/signupdata', requestOptions);
    // const article =  {name:user.username  };
    const article = {
      name: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      type: user.type,
      list: user.list,
    };
    axios.post("http://localhost:8080/signupdata", article).then((response) => {
      if (response.data === true) {
        if (user.type == "caretaker") {
          navigate("/caretaker");
        } else {
          navigate("/patienthome");
        }
      } else {
        
      }
    });

    // fetch("http://localhost:8080/signupdata", {
    //   method: "POST",
    //   mode: "cors", // this cannot be 'no-cors'
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       email: "ses",
    //       password: "assl",
    //     },
    //   }),
    // });
  };

  //const [name, setName] = useState("");
  const handleSubmit = (event) => {};

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
            type="number"
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
            start
          />
        </div>

        <Button text="Sign Up" />
      </form>
    </>
  );
}
