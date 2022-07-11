import React from "react";
import Modal from "react-modal";
const Optionmodal = (props) => (
  <Modal
    isOpen={!!props.selectedRandom}
    contentLabel="Select-Option "
    onRequestClose={props.handleClearOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h1 className="modal__title"> Selected Option</h1>
    {props.selectedRandom && (
      <p className="modal__body">{props.selectedRandom}</p>
    )}
    <button className="addoptionbutton" onClick={props.handleClearOption}>
      Okay
    </button>
  </Modal>
);
export default Optionmodal;
