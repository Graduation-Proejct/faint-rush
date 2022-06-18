import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setEmail,
  setPassword,
  addItem,
  setUsername,
  setValid,
} from "../../redux/userSlice";
//import Doctor from "../../components/SVG/NoOne";
import { ReactComponent as FemaleDoctor } from "../../assets/svgs/noOne.svg";
import { useCallback, useContext, useEffect, useState } from "react";
import { SocketContext } from "../../services/Socket";

import ListItem from "../../components/library/ListItem";
import dd from "../../assets/svgs/patient.png";
import { Navigate } from "react-router-dom";

export default function Caretaker() {
  const navigate = useNavigate();

  const socket = useContext(SocketContext);

  const [ joined, setJoined ] = useState(false);

  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ping = (item) => {
    console.log(item);
  };
  const list = user.list;
  useEffect(
    () => {
      socket.emit("join", {
        name: user.username,
        type: user.type,
        token: user.UID,
      });

      console.log("USER SHOULD BE JOINED BY NOW", user);
      socket.on("sos-activated", () => {
        console.log("sos-act");
        navigate("/sos");
      });
      // HANDLERS
      socket.on("faint-alarm", () => {
        setTimeout(function() {
          navigate("/faint");
          
        }, 5000);
      });
      return () => {
        // before the component is destroyed
        // unbind all event handlers used in this component
        socket.off("faint-alarm");

        socket.off("join");
      };
    },
    [ socket, user, navigate ]
  );

  return (
    <div className="h-screen font-mon flex flex-col items-center ">
      <Header />
      <div className="pt-8 h-auto items-center flex flex-grow flex-col">
        {list.length > 0 && (
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                {item?.name && (
                  <ListItem
                    relation={item.relation}
                    name={item.name}
                    phone={item.phone}
                    buttonName="PING"
                    photo={dd}
                    handles={() => ping(item)}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {list.length == 0 && (
        <div className="flex flex-grow flex-col justify-center items-center ">
          <section className="flex  flex-col   ">
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
