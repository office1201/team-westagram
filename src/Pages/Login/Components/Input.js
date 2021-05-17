import React, { Component } from "react";
import "./Input.scss";

class Input extends Component {
  render() {
    console.log(this.props);
    const { type, text } = this.props;
    return (
      <article className="Input">
        <div className="InputContainer">
          <input type={type} placeholder={text} name={type} />
        </div>
      </article>
    );
  }
}

export default Input;
