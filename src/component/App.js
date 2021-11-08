import React, { useState }  from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export const App = () => {
  const [total , settotal] = useState(null);
  const [next , setNext] = useState(null);
  const [operation , setoperation] = useState(null);

  const handleClick = buttonName => {
    const obj = {total, next, operation}
    const newtotal = calculate(obj, buttonName);

    if(newtotal.total !== undefined){
      settotal(newtotal.total);
    }
    if(newtotal.next !== undefined){
      setNext(newtotal.next);
    }
    if(newtotal.operation !== undefined){
      setoperation(newtotal.operation);
    }
  };

    return (
      <div className="component-app">
        <Display value={next || total || "0"} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    );
  };
  export default App;
