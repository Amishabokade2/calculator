import React, { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";
import "./Cal.css";

const Cal = () => {
  const [inputVal, setInputVal] = useState(0);
  const [opVal, setOpVal] = useState(0);
  const [currentOp, setCurrentOp] = useState("");
  const BtnArr = [
    {
      value: "AC",
      btnFun: () => {
        setCurrentOp("");
        setOpVal("");
        setInputVal(0);
      },
    },
    {
      value: "DEL",
      btnFun: () => {
        setInputVal((preVal) => {
          const newval = parseInt(preVal.toString().slice(0, -1));
          return isNaN(newval) ? 0 : newval;
        });
      },
    },

    {
      value: 0,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 0));
      },
    },
    {
      value: 1,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 1));
      },
    },
    {
      value: 2,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 2));
      },
    },
    {
      value: 3,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 3));
      },
    },
    {
      value: 4,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 4));
      },
    },
    {
      value: 5,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 5));
      },
    },
    {
      value: 6,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 6));
      },
    },
    {
      value: 7,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 7));
      },
    },
    {
      value: 8,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 8));
      },
    },
    {
      value: 9,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 9));
      },
    },
    {
      value: "+",
      btnFun: () => {
        setCurrentOp("+");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "-",
      btnFun: () => {
        setCurrentOp("-");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "*",
      btnFun: () => {
        setCurrentOp("*");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "/",
      btnFun: () => {
        setCurrentOp("/");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "%",
      btnFun: () => {
        setCurrentOp("%");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "=",
      btnFun: () => {
        switch (currentOp) {
          case "+":
            setInputVal((preVal) => {
              return preVal + opVal;
            });
            break;

          case "-":
            setInputVal((preVal) => {
              return opVal - preVal;
            });
            break;

          case "*":
            setInputVal((preVal) => {
              return opVal * preVal;
            });
            break;

          case "/":
            setInputVal((preVal) => {
              return opVal / preVal;
            });
            break;

          default:
            break;
        }
      },
    },
  ];

  return (
    <div className="container">
      <div>
        <h1 className="cal-head">Calculator</h1>
        <p className="sub-input">
          {" "}
          {opVal} {currentOp}
        </p>
        <input type="text" value={inputVal}></input>
      </div>

      <div className="btn-container">
        <CalWrapper BtnArr={BtnArr} /> {/* opArr={opArr}  */}
      </div>
    </div>
  );
};

export default Cal;
