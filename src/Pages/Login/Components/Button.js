import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  btnValidator = (email, password) => {
    const { regExp } = this.props;
    if (email.match(regExp) && password.length >= 8) return "isActive";
    return "";
  };

  render() {
    const { type } = this.props;
    const { email, password } = this.props.value;
    return (
      <div className="Button">
        <button className={`${this.btnValidator(email, password)}`}>{type}</button>
      </div>
    );
  }
}

export default Button;
