import React from "react";
import Buttons from "../../common/Buttons/Buttons";
import "./CalWrapper.css"

const CalWrap = (props) => {
  const AllBtn = props.BtnArr.map((btObj) => {
    return <Buttons btnName={btObj.value} btfun={btObj.btnFun} />;
  });
  // const AllOpBtn = props.opArr.map((btObj) => {
  //   return <Buttons btnName={btObj.value} btfun={btObj.btnFun} />;
  // });

  return (
    <div>
        <div className="btn-container ">
          {AllBtn}
        </div>
        {/* <div className=" flex flex-wrap   w-[350px]   ">{AllOpBtn}</div> */}
    </div>
  );
};

export default CalWrap;
