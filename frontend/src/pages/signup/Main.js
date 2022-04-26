import React from "react";

import Button from "../../components/library/Button";
import { useNavigate,useLocation } from "react-router-dom";


export default function Main() {
  const navigate = useNavigate();
  const location=useLocation();
  const navigateToPatienOrTakeCaretHome = (e) => {
    e.preventDefault();
    
    if(location.state.dis){
     navigate("/caretaker");

    }else{
     navigate("/patienthome")
      ;}
   
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
            className=" mb-3 text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="text"
            name="name"
            placeholder="Name"
            
            start
          />
           <input
            required
            className=" justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            required
            className="text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="tel"
            name="phone"
            placeholder="Phone"
            start
          />
          { location.state.dis&&
          <input
            required
            className="text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
            type="text"
            name="relation"
           
            placeholder="relation"
            start
          />}
          <input
            required
            className="text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  "
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
