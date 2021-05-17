import React, { Component } from "react";
import Form from "./Components/Form";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import "./Modal.scss";

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <Form type="로그인" data={signInData} />
      </div>
    );
  }
}

const signInData = [
  { type: "email", text: "전화번호, 사용자 이름 또는 이메일" },
  { type: "password", text: "비밀번호" },
];

const signUpData = [
  { type: "email", text: "전화번호, 사용자 이름 또는 이메일" },
  { type: "password", text: "비밀번호" },
  { type: "name", text: "이름" },
];
