import React from 'react'
import { blue } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Bar = ({name,Icon , active ,main}) => {
    return (
      <div
        className={`home flex flexr px-2 flex-col justify-center items-center mx-2  ${
          active == 1 ? "border-b-2  " : "notActive"
        } border-black`}
      >
        <div className="logo mb-0 cursor-pointer flex items-center justify-center ">
          <Icon></Icon>
        </div>
        <font className="-mt-1  p-0 font-light text-sm flex justify-center">
          {name} {main == 1 ? <ArrowDropDownIcon /> : ""}{" "}
        </font>
      </div>
    );
}

export default Bar
