import React, { Component } from "react";
import Icon from "./Icon";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="Navbar">
        <h1>{title}</h1>
        <form>
          <input type="text" placeholder="검색" />
          <i className="fas fa-search"></i>
        </form>
        <ul className="Icons">
          {IconsData.map((icon, idx) => (
            <Icon key={idx} url={icon.url} alt={icon.alt} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;

const IconsData = [
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png", alt: "탐색 아이콘입니다." },
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png", alt: "하트 아이콘입니다." },
  { url: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png", alt: "마이페이지 아이콘입니다." },
];
