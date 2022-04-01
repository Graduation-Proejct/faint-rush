import React from "react";

import Button from "../../components/library/Button";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    const navigateToPatientHome = () => {
      navigate("/patienthome");};
    //const [name, setName] = useState("");

  const handleSubmit = (event) => {
   
  }
    
    return (
  
    <>
     
     
       <form  onSubmit={navigateToPatientHome}  className=" flex justify-center  flex-col  items-center   ">
       <input required className=" justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl" type="text" name="email" placeholder="Enter your email"></input>
        <input required className="text-center placeholder:italic placeholder:text-slate-400 block  w-80 h-14 drop-shadow-md mt-4	rounded-2xl  " type="password"  name="password" placeholder="Password" start></input>
        
       
        
        <input required className="bg-gradient-to-br from-grdstart to-prim text-white text-sm font-bold
         text-center placeholder:italic placeholder:text-slate-400 block  w-60 h-14 drop-shadow-md mt-4 mb-4		rounded-2xl  " 
         type="submit"  value="Log in" name="password" placeholder="Password" start></input>


     


   
       </form>
      
    </>
  );
}
