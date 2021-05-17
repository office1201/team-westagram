import React, { Component } from "react";
import "./Input.scss";

class Input extends Component {
  render() {
    const { type, text } = this.props;
    return (
      <article className="Input">
        <input type={type} placeholder={text} name={type} />
      </article>
    );
  }
}

export default Input;
