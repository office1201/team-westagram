import React, { Component } from "react";
import Icon from "./Icon";
import Menu from "./Menu";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    isActive: "",
  };

  handleClick = () => {
    const { isActive } = this.state;
    !isActive ? this.setState({ isActive: "isActive" }) : this.setState({ isActive: "" });
  };

  render() {
    const { title } = this.props;
    const { isActive } = this.state;
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
          <div className="User">
            <img
              onClick={this.handleClick}
              className={isActive}
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/66802565_354441191910711_5735933316343791616_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=V727mSkKilkAX9Grq8l&edm=AGBWlhEBAAAA&ccb=7-4&oh=5b76c4c237f40d5ed4affa2d67c8b6ba&oe=60C7F464&_nc_sid=57d425"
              alt="프로필 메뉴 사진입니다."
            />
            {isActive && (
              <ul className="Menus">
                {MenuData.map((menu, idx) => (
                  <Menu key={idx} menu={menu} />
                ))}
              </ul>
            )}
          </div>
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

const MenuData = ["프로필", "저장됨", "설정", "계정 전환", "로그아웃"];
