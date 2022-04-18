import React from "react";

import Header from "./Header";
//import ListItem from "./ListItem";
import ListItem from "../../components/library/ListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useLocation} from 'react-router-dom';






export default function PatientHome() { 
  const location = useLocation();
 console.log(location.state==null);
 



  const initialList = [
    {
      id: '1',
      relation: 'brother',
      name: 'ahmed',
      phone:'01236635996',
      
    },
    {
      id: '2',
      relation: 'brother',
     
      name: 'ahmed',
      phone:'01236635996',
     
    },
    {
      id: '3',
      relation: 'brother',
      name: 'ahmed',
      phone:'01236635996',
     
    },
    {
      id: '4',
      relation: 'brother',
      name: 'ahmed',
      phone:'01236635996',
     
    },
  ];
  const [list, setList] = useState(initialList);

  const navigate = useNavigate();
  const PatientEdit = (item) => {
    
  navigate("/edit",{state:{id:item.id,name:item.name ,relation:item.relation,phone:item.phone}});
  //todo dispatch action to set user type to caretaker
};
function update () {
 // document.getElementById(1).setAttribute("",")
 list[location.state.id-1].name=location.state.name;
 list[location.state.id-1].relation=location.state.relation;
 list[location.state.id-1].phone=location.state.phone;


  

//navigate("/edit",{state:{id:1,name:'sabaoon'}});
//todo dispatch action to set user type to caretaker
};
if(location.state!=null){update()}


  return (
    <div className=" h-screen font-mon flex flex-col items-center w-auto gap-5 2xs:gap-10 ">
     <Header/>
     

     <ul>
        { list.map((item) =>(
        <li key={item.id}>
         <ListItem relation={item.relation} name={item.name} phone={item.phone} handles={ () => PatientEdit(item)}/>
        </li>
      ))}

  

</ul>
     
    </div>
  );
}
