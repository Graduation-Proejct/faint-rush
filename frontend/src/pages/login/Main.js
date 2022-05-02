import React from "react";

import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setEmail,setPassword, setUsername,setValid } from "../../redux/userSlice"

export default function Main() {
  const user = useSelector((state) => state.user)
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToPatientHome = (e) => {
    e.preventDefault();
   
    if(isValid())
    navigate("/patienthome");
  };
  //const [name, setName] = useState("");
  function isValid(){
   return true;
  };

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
            onChange={(e) => {dispatch(setEmail(e.target.value))}}
            placeholder="Enter your email"
          />
          <input
            required
            className=" border-4 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            onChange={(e) => {dispatch(setPassword(e.target.value))}}
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
