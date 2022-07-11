import React from "react";
const Action = (props) => (
  <div>
    <button
      onClick={props.handlepick}
      disabled={!props.hasOptions}
      className="bigbutton"
    >
      What should i do ?
    </button>
  </div>
);
export default Action;
