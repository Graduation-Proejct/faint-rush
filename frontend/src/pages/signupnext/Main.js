import React from "react";

import check from "../../assets/svgs/check.png";
import Header from "./Header";
import { useState } from "react";

import {
  setSignUpValue,
  setEditValue,
  setLoading,
  setList,
  addItem,
  delItem,
} from "../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Main() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const qestions = [];
  const [haveDiabetes, setHaveDiabetes] = useState(-1);
  const [haveDiabetes1, setHaveDiabetes1] = useState(-1);
  const [haveDiabetes2, setHaveDiabetes2] = useState(-1);

  //console.log(qestions);
  //handles checked box then add to list

  const handlesCheckedBox = (obj) => {
    if (obj.checked) {
      dispatch(addItem(obj.txt));
      //qestions.push(obj.txt)
    } else {
      // window.alert(qestions.indexOf(obj.txt))
      dispatch(delItem(obj.txt));
      //qestions.splice(qestions.indexOf(obj.txt), 1);
    }
    //dispatch(setList(qestions));
    console.log("fff:" + items.list);
    console.log("qqq:" + qestions);
    console.log("qqq:" + qestions.length);
  };

  const handlesCheckedDiabase=()=>{
    dispatch(delItem("Diabetes type 1"));
    dispatch(delItem("Diabetes type 2"));

  }

  console.log("haveDiabetes " + haveDiabetes);
  return (
    <div className="flex flex-col  max-w-md w-full items-start px-5 ">
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({ checked: e.target.checked, txt: "Arrhythmia" });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        />
        <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
          <img src={check} />
        </div>
        <span className="ml-2 relative bottom-1">Arrhythmia</span>
      </label>
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            setHaveDiabetes(haveDiabetes * -1);
            handlesCheckedDiabase();

          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        />
        <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
          <img src={check} />
        </div>
        <span className="ml-2 relative bottom-1">Diabetes</span>
      </label>

      {haveDiabetes == 1 && (
        <div className="flex flex-col">
          <label className=" relative  left-4 rounded-xl text-crazyblue pb-2">
            <input
              type="checkbox"
              onChange={(e) => {
                setHaveDiabetes1(haveDiabetes1 * -1);
                handlesCheckedBox({
                  checked: e.target.checked,
                  txt: "Diabetes type 1",
                });
              }}
              id="check-box-1"
              className="appearance-none rounded border-2 border-prim h-5 w-5 "
            />
            <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
              <img src={check} />
            </div>
            <span className="ml-2 relative bottom-1">Diabetes type 1</span>
          </label>

          { (
            <label className=" relative left-4 rounded-xl text-crazyblue pb-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  handlesCheckedBox({
                    checked: e.target.checked,
                    txt: "Diabetes type 2",
                  });
                }}
                id="check-box-1"
                className="appearance-none rounded border-2 border-prim h-5 w-5 "
              />
              <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
                <img src={check} />
              </div>
              <span className="ml-2 relative bottom-1">Diabetes type 2</span>
            </label>
          )}
        </div>
      )}

      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({ checked: e.target.checked, txt: "Seizure" });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        />
        <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
          <img src={check} />
        </div>
        <span className="ml-2 relative bottom-1">Seizure</span>
      </label>
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({
              checked: e.target.checked,
              txt: "Heart Problems",
            });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        />
        <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
          <img src={check} />
        </div>
        <span className="ml-2 relative bottom-1">Heart Problems</span>
      </label>
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({
              checked: e.target.checked,
              txt: "Hyperventilation",
            });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        />
        <div className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 opacity-0 check-1">
          <img src={check} />
        </div>
        <span className="ml-2 relative bottom-1">Hyperventilation</span>
      </label>

      <div className="py-4">
        <Header />
      </div>
    </div>
  );
}
