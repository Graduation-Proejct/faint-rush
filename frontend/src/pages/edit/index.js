import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import Header from "./Header";
import Logo from "../../components/SVG/Logo";
import {useLocation} from 'react-router-dom';
import { useState } from "react";




export default function GetStarted() {
  const location = useLocation();
 
  const [itemName, setItemName] =useState(location.state.name);
 const [itemPhone, setItemPhone] =useState( location.state.phone);
  const [itemRelation, setItemRlation] =useState( location.state.relation);

  const navigate = useNavigate();
  
  const navigateToPatientHome = (e) => {
    e.preventDefault();
    
    
    
    
    navigate("/patienthome",{state:{id:location.state.id,name:itemName ,relation:itemRelation,phone:itemPhone}});
  };
  
  
  return (
    
     <>
      <div className="pt-10 h-screen flex flex-col items-center">
        <Logo/>
        <Header />
        <h2>{location.state.name}</h2>

      <form
        onSubmit={(e) => {
          navigateToPatientHome(e);
        }}
        className=" flex justify-center  flex-col    m-4"
      >
        <div>
        
          <input
            required
            className="mb-3  justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="text"
            id="relation_edit"
            value={itemRelation}
            onChange={(e) => setItemRlation(e.target.value)}
            name="relation"
            placeholder="Enter the relation"
          />
           <input
            required
            className=" mb-3 justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="text"
            name="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter name"
          />
           <input
            required
            className=" mb-3 justify-center text-center placeholder:italic placeholder:text-slate-400 block w-80 h-14 drop-shadow-md rounded-2xl"
            type="number"
            name="phone"
            value={itemPhone}
            onChange={(e) => setItemPhone(e.target.value)}

            placeholder="Enter phone"
          />
          
        </div>

        <Button text="Done" />
      </form>

      </div>


    </>
    
  );
}
