import React from "react";
import Addoption from "./Addoption.js";
import Options from "./Options.js";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Optionmodal from "./OptionModal";

class Indecisionapp extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.deletethisoption=this.deletethisoption.bind(this);
  //     this.handlepick=this.handlepick.bind(this);
  //     this.submitHandle=this.submitHandle.bind(this);
  //     this.deleteoneoption=this.deleteoneoption.bind(this);
  //     this.state={
  //         optionsbyuser: props.byuser
  //     };
  //}
  state = {
    // optionsbyuser: this.props.byuser,
    optionsbyuser: [],
    selectedRandom: undefined,
  };

  handleClearOption = () => {
    this.setState(() => ({ selectedRandom: undefined }));
  };
  deletethisoption = () => {
    this.setState(() => ({ optionsbyuser: [] }));
  };
  deleteoneoption = (removeoneoption) => {
    this.setState((prevobj) => ({
      optionsbyuser: prevobj.optionsbyuser.filter(
        (option) => removeoneoption !== option
      ),
    }));
  };
  componentDidMount() {
    const json = localStorage.getItem("options");
    const option = JSON.parse(json);
    console.log(option);
  }
  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.optionsbyuser.length !== this.state.optionsbyuser.length) {
        const json = JSON.stringify(this.state.optionsbyuser);
        const options = localStorage.setItem("options", json);
        //   console.log(  localStorage.getItem('options'));
        if (options) {
          this.setState(() => ({ optionsbyuser: options }));
        }
      }
    } catch (e) {
      //if there is error do nothing
    }
  }
  submitHandle = (objbyaddopt) => {
    if (!objbyaddopt) return "Please Enter a Valid Option";
    else if (this.state.optionsbyuser.indexOf(objbyaddopt) > -1)
      return "This  Option Already Exists";
    else {
      this.setState((prevobj) => ({
        optionsbyuser: prevobj.optionsbyuser.concat([objbyaddopt]),
      }));
    }
  };

  handlepick = () => {
    this.setState((preobj) => {
      let num = Math.floor(Math.random() * preobj.optionsbyuser.length);
      const whatShould = preobj.optionsbyuser[num];
      this.setState(() => ({ selectedRandom: whatShould }));
    });
  };
  render = () => {
    const title = "Indecision App";
    const subtitle = "Put Yor lifein hands of computer";
    return (
      <div>
        <Header title={title} />
        <div className="container">
          <Action
            handlepick={this.handlepick}
            hasOptions={this.state.optionsbyuser.length > 0}
          />

          <div className="widget">
            <Options
              deletethisoption={this.deletethisoption}
              optionsbyuser={this.state.optionsbyuser}
              deleteoneoption={this.deleteoneoption}
            />
            <Addoption
              submitHandle={this.submitHandle}
              optionbyuser={this.state.optionsbyuser}
            />
          </div>
        </div>

        <Optionmodal
          selectedRandom={this.state.selectedRandom}
          handleClearOption={this.handleClearOption}
        />
      </div>
    );
  };
}

// Indecisionapp.defaultProps = {
//   byuser: ["one", "two"],
// };
export default Indecisionapp;
