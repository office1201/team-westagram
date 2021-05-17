import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="Button">
        <button>{type}</button>
      </div>
    );
  }
}

export default Button;
