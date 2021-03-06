import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setCancel,
  setIsNot,
  setMedicalHistory,
  setQuestions,
} from "../../redux/counterSlice";

export default function INFO() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const items = useSelector((state) => state.items);
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  // navigate to home
  const goHOME = () => {
    if (user.type == "patient") {
      navigate("/patienthome");
    } else {
      navigate("/caretaker");
    }
  };
  // do reset

  const reset = () => {};
  var text="I suffer from high blood sugar and sometimes and I have had Coronavirus disease (COVID-19)"
  var list = [
    "Arrhythmia",
    "daibase type 2",
    "Hyperventilation",
    "Seizure",
    " Hyperventilation",
  ];
  if(items.list.length!=0){
      list=items.list
  }
  if(items.medicalHistory!=""){
    text=items.medicalHistory
}

  return (
    <div className="flex justify-center">
      <div className="pl-2 pt-10 h-screen  flex items-start  flex-col    max-w-xl w-full relative ">
        <div className="flex flex-col  w-full ">
          <span className="pb-4  font-bold text-prim font[Helvetica] text-[40px]">
            Patient's INFO
          </span>
        </div>
        <span className=" py-3 font-bold text-prim font[Helvetica] text-[26px]">
          Patient's Answers
        </span>

        {list.length > 0 && (
          <ul className="list-outside flex flex-col items-start  ">
            {list.map((item) => (
              <li className="py-2 " key={item.id}>
                <span className=" text-left text-prim font[Helvetica] text-[23px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        <span className="pt-8 font-bold text-prim font[Helvetica] text-[26px]">
          Patient's Medical History
        </span>
        <p class="block py-3 pr-3 text-prim font[Helvetica] text-[18px]">{text}</p>
      </div>
    </div>
  );
}
