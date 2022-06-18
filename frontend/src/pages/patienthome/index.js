import axios from "axios";
import dd from "../../assets/svgs/takecarer.png";
import Modal2 from "../../components/library/Modal2";
import Header from "./Header";

//import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import ListItem from "../../components/library/ListItem";

import Button from "../../components/library/Button";

import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModel } from "../../redux/counterSlice";
import { delCareTaker } from "../../redux/userSlice";
import { SocketContext } from "../../services/Socket";

export default function PatientHome() {
  const socket = useContext(SocketContext);

  const [ joined, setJoined ] = useState(false);

  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);

  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let list = user.list;
  //notify every one in the list
  const notifyEmergencyList = () => {
    socket.emit("sos");
    navigate("/sos");
  };

  const cancel = () => {
    dispatch(setShowModel(false));
  };

  console.log(user.list);
  // window.alert(user.list.length);
  // add caretaker to list
  const addTakecarer = () => {
    // window.alert(user.list.length);

    //console.log(user.list);

    navigate("/edit");
    //console.log(user.list);
  };

  useEffect(
    () => {
      socket.emit("join", {
        name: user.username,
        type: user.type,
        token: user.UID,
      });
      console.log("USER SHOULD BE JOINED BY NOW", user);

      // HANDLERS
      socket.on("faint-alarm", () => {
        navigate("/faint");
      });
      socket.on("are-you-ok", () => {
        navigate("/faint");
      });
      return () => {
        // before the component is destroyed
        // unbind all event handlers used in this component
        socket.off("join");
        socket.off("faint-alarm");
        socket.off("are-you-ok");
      };
    },
    [ socket, user ]
  );

  // nev to edit page
  const PatientEdit = async (item) => {
    const temp = { UID: user.UID, emailCaretaker: item.email };
    console.log("dsa" + temp.emailCaretaker);
    await axios
      .post("https://faintbaseapp.herokuapp.com/delete_caretaker", temp)
      .then((response) => {
        console.log("before" + response.data);
        if (response.data) {
          console.log("after" + response.data);
          dispatch(delCareTaker(item));
        }
      });
    //https://faintbaseapp.herokuapp.com/

    //list.splice(state.list.indexOf(action.payload), 1)

    // navigate("/edit", { state: { id: item.id } });
    //todo dispatch action to set user type to caretaker
  };
  console.log("sdf" + items.showModelx);
  return (
    <div className=" h-screen font-mon flex flex-col items-center w-auto gap-5 2xs:gap-10 bg-scroll">
      <Header />

      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <ListItem
                relation={item.email}
                name={item.name}
                phone={item.phone}
                buttonName="DEL"
                photo={dd}
                handles={() => PatientEdit(item)}
              />
            </li>
          ))}
        </ul>
      )}

      {list.length < 4 && (
        <Button
          text="Add"
          handles={addTakecarer}
          type="button"
          data-modal-toggle="defaultModal"
        />
      )}
      {items.showModelx && (
        <Modal2 handlesNotify={notifyEmergencyList} handlesCancel={cancel} />
      )}

      <div
        className={`alert alert-error shadow-lg transition absolute bottom-5 opacity-${true
          ? "1"
          : "0"}`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>
    </div>
  );
}
