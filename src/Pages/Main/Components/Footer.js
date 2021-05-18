import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer class="sidebar__footer">
        <ul class="sidebar__footer__menu">
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">소개</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">도움말</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">홍보센터</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">API</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">채용정보</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">개인정보처리방침</span>
            </a>
          </li>
          <li class="sidebar__footer__menu-item">
            <a href="#">
              <span class="footer__link">약관</span>
            </a>
          </li>
        </ul>
        <span class="footer__text">© 2021 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    );
  }
}

export default Footer;
