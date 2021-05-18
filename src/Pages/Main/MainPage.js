import React, { Component } from "react";
import MainPageLayout from "./Components/MainPageLayout";
import Navbar from "./Components/Navbar";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import "./MainPage.scss";
import Feeds from "./Feeds";

class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar title="Westagram" />
        <MainPageLayout>
          <Feeds />
        </MainPageLayout>
      </>
    );
  }
}

export default MainPage;
