import React from "react";

export default function ListItem(props) {
  const { relation,name,phone, handles  } = props;
  return (
    <>
      <div className="flex flex-row relative">
        <image className=" z-50 rounded-xl bg-black w-12 h-12 border-4 m-auto relative"></image>
        <div className="pl-3 flex flex-row  w-80 rounded-2xl z-30  shadow-md relative">
          <div className="flex flex-col p-2">
            <span className="inline text text-gray-400">{relation}</span>
            <span className="inline text-xl text-crazyblue font-bold">{name}</span>
            <span className="text-gray-400">{phone}</span>

          </div>
          <button className="rounded-2xl float-right border-2 ml-12 w-24 h-10 m-auto mr-2 hover:bg-lime-50" onClick={handles}>EDIT</button>
        </div>

      </div>
    </>


  );
}
