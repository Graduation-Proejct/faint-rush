import React from "react";

import Header from "./Header";
import Modal from "../../components/library/Modal";

//import ListItem from "./ListItem";
import ListItem from "../../components/library/ListItem";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Button from "../../components/library/Button";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  addItem,
  setUsername,
  setValid,
} from "../../redux/userSlice";

export default function PatientHome() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let list = user.list;

  // window.alert(user.list.length);
  // add caretaker to list
  const addTakecarer = () => {
    // window.alert(user.list.length);

    dispatch(addItem());
    //console.log(user.list);

    navigate("/edit");
    //console.log(user.list);
  };

  // nev to edit page
  const PatientEdit = (item) => {
    navigate("/edit", { state: { id: item.id } });
    //todo dispatch action to set user type to caretaker
  };

  return (
    <div className=" h-screen font-mon flex flex-col items-center w-auto gap-5 2xs:gap-10 bg-scroll">
      <Header />

      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <ListItem
                relation={item.relation}
                name={item.name}
                phone={item.phone}
                buttonName="Edit"
                handles={() => PatientEdit(item)}
              />
            </li>
          ))}
        </ul>
      )}

      {list.length < 4 && (
        <Button
          text="add"
          handles={addTakecarer}
          type="button"
          data-modal-toggle="defaultModal"
        />
      )}
    </div>
  );
}
