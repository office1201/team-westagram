import React, { Component } from "react";
import Footer from "./Footer";
import Friend from "./Friend";
import MyTab from "./MyTab";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <section className="Sidebar">
        <div className="SidebarContainer">
          <div className="SidebarWrapper">
            {MyTabData.map((data) => (
              <MyTab data={data} />
            ))}
            <div className="Friends">
              <div className="FriendsText">
                <strong>회원님을 위한 추천</strong>
              </div>
              <ul>
                {SidebarData.map((friend, idx) => (
                  <Friend key={idx} data={friend} />
                ))}
              </ul>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    );
  }
}

export default Sidebar;

const MyTabData = [
  {
    name: "nakiaathome",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/164807560_952888125450516_7510156972160703983_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=szlVRQt3y3sAX-Ovhn9&edm=ABfd0MgBAAAA&ccb=7-4&oh=7f1691ccd053c3b578aa7a114399626f&oe=60C8D155&_nc_sid=7bff83",
    alt: "내 프로필 사진입니다.",
    nickname: "태현",
    follow: "전환",
  },
];

const SidebarData = [
  {
    name: "harrykane",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/119070227_253327752502309_6511477056196546460_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=hnrunp_0mXIAX92gx-h&edm=ABfd0MgBAAAA&ccb=7-4&oh=27c13e2bf729323803d6a68567a4e295&oe=60C8EF32&_nc_sid=7bff83",
    des: "인기",
  },
  {
    name: "kyliejenner",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/176018991_452915632660151_2452110499084252327_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=bMPkLbrP0_wAX-hx2Kw&edm=ABfd0MgBAAAA&ccb=7-4&oh=00a57d617b1f35dda3e3480408ecc3ad&oe=60CA5786&_nc_sid=7bff83",
    des: "인기",
  },
  {
    name: "brunomars",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/65302424_346059889400191_5999870605850050560_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Obhxu-GPgVAAX-250m6&edm=ABfd0MgBAAAA&ccb=7-4&oh=7abe71b3f7fb58fb1cfe06416636db63&oe=60C86A2C&_nc_sid=7bff83",
    des: "회원님을 위한 추천",
  },
  {
    name: "fairy___g2",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/180854813_514917376204495_8241282884640715047_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=q3id-9wJQ_MAX9Br52O&edm=ABfd0MgBAAAA&ccb=7-4&oh=267770eac24d4d03a86c99a7440375bb&oe=60C8069B&_nc_sid=7bff83",
    des: "회원님을 위한 추천",
  },
  {
    name: "canon_mj",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/66802565_354441191910711_5735933316343791616_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=V727mSkKilkAX9Grq8l&edm=AGBWlhEBAAAA&ccb=7-4&oh=5b76c4c237f40d5ed4affa2d67c8b6ba&oe=60C7F464&_nc_sid=57d425",
    des: "회원님을 팔로우합니다",
  },
  {
    name: "2nyang",
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/168687505_1151366418644193_3169814356183991403_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=UrgbbNYnKogAX-Gvqhq&edm=AEF8tYYBAAAA&ccb=7-4&oh=42d51f091c5de262c132c16bacfec8a8&oe=60C869C3&_nc_sid=a9513d",
    des: "회원님을 팔로우합니다",
  },
];
