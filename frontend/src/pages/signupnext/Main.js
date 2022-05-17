import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
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
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
        <span className="ml-2 relative bottom-1">Arrhythmia</span>
      </label>
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({ checked: e.target.checked, txt: "Diabetes" });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
        <span className="ml-2 relative bottom-1">Diabetes</span>
      </label>

      <label className=" relative  left-4 rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({
              checked: e.target.checked,
              txt: "Diabetes type 1",
            });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
        <span className="ml-2 relative bottom-1">Diabetes type 1</span>
      </label>

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
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
        <span className="ml-2 relative bottom-1">Diabetes type 2</span>
      </label>
      <label className=" relative rounded-xl text-crazyblue pb-2">
        <input
          type="checkbox"
          onChange={(e) => {
            handlesCheckedBox({ checked: e.target.checked, txt: "Seizure" });
          }}
          id="check-box-1"
          className="appearance-none rounded border-2 border-prim h-5 w-5 "
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
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
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
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
        ></input>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-8xl h-5 w-5 text-prim  absolute left-0 top-0 text-opacity-0 check-1"
        />
        <span className="ml-2 relative bottom-1">Hyperventilation</span>
      </label>

      <div className="py-4">
        <Header />
      </div>
    </div>
  );
}
