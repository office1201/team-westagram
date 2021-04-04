import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

class LoginTaehyun extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      isActiveBtn: false,
    };
  }

  handleIdInput = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  checkLogin = () => {
    this.state.id.indexOf("@") && this.state.password.length >= 5 ? this.setState({ isActiveBtn: true }) : this.setState({ isActiveBtn: false });
  };

  goToMain = () => {
    this.props.history.push("/main-taehyun");
  };

  render() {
    console.log(this.state);
    return (
      <>
        <section id="loginForm">
          <div class="loginForm__container">
            <h1 class="loginForm__logo">Westagram</h1>
            <div class="loginForm__input">
              <input onChange={this.handleIdInput} onKeyUp={this.checkLogin} class="input-id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input onChange={this.handlePwInput} onKeyUp={this.checkLogin} class="input-pw" type="password" placeholder="비밀번호" />
            </div>
            <button onClick={this.goToMain} className={this.state.isActiveBtn ? "loginForm__btn-enable" : "loginForm__btn-disable"}>
              로그인
            </button>
            <div class="loginForm__divide">
              <div class="loginForm__divide__line"></div>
              <h6 class="loginForm__divide__text">또는</h6>
              <div class="loginForm__divide__line"></div>
            </div>
            <a class="loginForm__facebook" href="#">
              <i class="loginForm__facebook__icon fab fa-facebook-square"></i>
              <h5 class="loginForm__facebook__text">Facebook으로 로그인</h5>
            </a>
            <a class="loginForm__forget" href="#">
              <span class="loginForm__forget__text">비밀번호를 잊으셨나요?</span>
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(LoginTaehyun);
