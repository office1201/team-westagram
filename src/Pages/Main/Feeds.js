import React, { Component } from "react";
import Feed from "./Feed";
import "./Feeds.scss";

class Feeds extends Component {
  render() {
    return (
      <section className="Feeds">
        <div className="FeedsContainer">
          <ul>
            {FeedsData.map((feed, idx) => (
              <Feed key={idx} data={feed} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Feeds;

const FeedsData = [
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/47581322_331313240788424_7580673034705436672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=pFaHBT1kkVoAX-t6LdN&edm=ANg5bX4BAAAA&ccb=7-4&oh=d3b2ef809c504fa0ff100a6546b011a8&oe=60C942F6&_nc_sid=55937d",
    name: "han_ye_seul_",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/95898509_528325404737365_8466554780179759104_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=oJvRP-1yTDAAX_MK_QQ&edm=ANg5bX4BAAAA&ccb=7-4&oh=9832e096c87e4c47a6e354e1428c60f2&oe=60C97D47&_nc_sid=55937d",
    name: "haejun_kim_",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/165624425_157218146270973_7029745587477918295_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xpCCE9efJ-oAX8wriFA&edm=ABfd0MgBAAAA&ccb=7-4&oh=ad5129cf9f1b574aabd1e6a47eb965c7&oe=60C97065&_nc_sid=7bff83",
    name: "yj_loves",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/158176911_941264666683660_5787569050369574428_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=r8ESBHW5QVMAX8mWbho&edm=ANg5bX4BAAAA&ccb=7-4&oh=280aa244f7c95b6115ce93ccc15cc277&oe=60C73C5C&_nc_sid=55937d",
    name: "nelebuschard",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/180798174_210412550619266_266447314227580444_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=6FDiu-S_iAIAX-NPjBA&edm=AEF8tYYBAAAA&ccb=7-4&oh=4068d883f2f2d92251b296f409338b18&oe=60C93613&_nc_sid=a9513d",
    name: "jeeyou___",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/162919460_462524861847257_5258550243561512139_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=teEukWyA1-IAX_81iar&edm=AEF8tYYBAAAA&ccb=7-4&oh=ca89708f467db548cf0e28d0464ca16e&oe=60C96338&_nc_sid=a9513d",
    name: "itssweetrain",
  },
  {
    url:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/106555016_897543590727195_4848380808049075653_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3FeHea1DPN8AX9IVav1&edm=AEF8tYYBAAAA&ccb=7-4&oh=1ad9d6837a8e23eb2df44897aa06b25e&oe=60C7FD69&_nc_sid=a9513d",
    name: "blackrock",
  },
];
