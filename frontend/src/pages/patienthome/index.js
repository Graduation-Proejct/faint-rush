import React from "react";

import Header from "./Header";
//import ListItem from "./ListItem";
import ListItem from "../../components/library/ListItem";



export default function PatientHome() {
  return (
    <div className=" h-screen font-mon flex flex-col items-center w-auto gap-5 2xs:gap-10 ">
     <Header/>

     <ul>
  <li><ListItem relation="Father" name="ahmed" phone="01236635996"/></li>
  <li><ListItem relation="Brother" name="abdo" phone="01236635996"/></li> 
   <li><ListItem relation="Friend" name="Mazen" phone="01236635996"/></li>
   <li><ListItem relation="Friend" name="zain" phone="01236635996"/></li>

</ul>
     
    </div>
  );
}
