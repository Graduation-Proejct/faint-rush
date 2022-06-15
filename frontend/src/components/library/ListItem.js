import React from "react";
import dd from "../../assets/svgs/takecarer.png"

export default function ListItem(props) {
  
  const { relation,name,phone,buttonName ,handles  } = props;
  return (
    <>
      <div className="flex flex-row relative">
        <img src={dd} className=" z-50 rounded-xl bg-green-300 w-12 h-12 border-4 m-auto relative "></img>
        <div className="pl-3 flex flex-row  w-80 rounded-2xl z-30  shadow-md relative">
          <div className="flex flex-col p-2 w-7/12">
            <span className="block text text-gray-400 text-ellipsis overflow-hidden  ">{relation}</span>
            <span className="block text-xl text-crazyblue font-bold text-ellipsis overflow-hidden">{name}</span>
            <span className="block text-gray-400 text-ellipsis overflow-hidden">{phone}</span>

          </div>
          <button className="rounded-2xl float-right border-2 ml-12 w-20 h-10 m-auto mr-2 hover:bg-lime-50" onClick={handles}>{buttonName}</button>
        </div>

      </div>
    </>


  );
}
