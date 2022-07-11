import React from "react";

const Option = (props) => (
  <div className="newoption">
    <p className="newoption__text">
      {" "}
      {props.indexoption + 1} {props.optionstext}{" "}
    </p>

    <button
      className="addoptionbutton--link"
      onClick={(e) => {
        props.deleteoneoption(props.optionstext);
      }}
    >
      remove
    </button>
  </div>
);
export default Option;
