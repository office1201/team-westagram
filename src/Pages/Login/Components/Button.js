import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Button.scss";

class Button extends Component {
  btnValidator = (email, password) => {
    const { regExp } = this.props;
    if (email.match(regExp) && password.length >= 8) return "isActive";
    return "";
  };

  goToMain = (email, password) => {
    const { regExp } = this.props;
    if (email.match(regExp) && password.length >= 8)
      return setTimeout(() => {
        alert("로그인 성공!");
        this.props.history.push("/main");
      }, 1000);
    return setTimeout(() => alert("올바른 작성을 부탁드려요."));
  };

  render() {
    const { type } = this.props;
    const { email, password } = this.props.value;
    return (
      <div className="Button">
        <button className={`${this.btnValidator(email, password)}`} onClick={() => this.goToMain(email, password)}>
          {type}
        </button>
      </div>
    );
  }
}

export default withRouter(Button);
