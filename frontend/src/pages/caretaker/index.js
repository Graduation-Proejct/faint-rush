import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  addItem,
  setUsername,
  setValid,
} from "../../redux/userSlice";
//import Doctor from "../../components/SVG/NoOne";
import { ReactComponent as FemaleDoctor } from "../../assets/svgs/noOne.svg";
import ListItem from "../../components/library/ListItem";

export default function Caretaker() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ping = (item) => {};
  const list = user.list;

  return (
    <div className="h-screen font-mon flex flex-col items-center  ">
      <Header />

      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <ListItem
                relation={item.relation}
                name={item.name}
                phone={item.phone}
                buttonName="PING"
                handles={() => ping(item)}
              />
            </li>
          ))}
        </ul>
      )}

      {list.length == 0 && (
        <div>
          <section className="flex  flex-col items-center  ">
            <FemaleDoctor />
          </section>
          <h1>
            You're not connected to any patients, yet.
            <br />
            Get started by connecting to your patient.
          </h1>
        </div>
      )}
    </div>
  );
}
