import React from "react";
import { FileUploader } from "../../components/FileUpLoader";

import {ReactComponent as Spinner} from "../../assets/svgs/spinner.svg";


export default function Test() {
  // <FileUploader/>
  return (
    <div className="pt-10 h-screen font-mon flex flex-col gap-5 2xs:gap-10 items-center  ">
      <Spinner  ></Spinner>

      

  
    </div>
  );
}
