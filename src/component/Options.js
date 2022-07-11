import React from "react";
import Option from "./Option.js";

const Options = (props) => (
  <div>
    <div></div>

    <div className="widget-header">
      <h3 className=" widget-header__title">Your Option's</h3>
      <button
        className="addoptionbutton addoptionbutton--link"
        onClick={props.deletethisoption}
      >
        Remove All
      </button>
    </div>
    {props.optionsbyuser.length === 0 && (
      <p className="widget__message"> Add an Option Please </p>
    )}

    {props.optionsbyuser.map((num, index) => (
      <Option
        key={num}
        optionstext={num}
        indexoption={index}
        deleteoneoption={props.deleteoneoption}
      />
    ))}
  </div>
);

export default Options;
