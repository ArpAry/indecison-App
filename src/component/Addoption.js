import React from "react";

export default class Addoption extends React.Component {
  state = {
    error: undefined,
  };

  submitHandle = (e) => {
    e.preventDefault();
    let newOption = e.target.elements.option.value.trim();
    const error = this.props.submitHandle(newOption);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render = () => (
    <div>
      {this.state.error && (
        <p className="addoption-error">{this.state.error}</p>
      )}
      <form onSubmit={this.submitHandle} className="addoption">
        <input type="text" name="option" className="addoption__input" />
        <button className="addoptionbutton">Add Option</button>
      </form>
    </div>
  );
}
