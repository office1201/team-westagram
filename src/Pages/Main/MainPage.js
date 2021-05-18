import React, { Component } from "react";
import MainPageLayout from "./Components/MainPageLayout";
import Navbar from "./Components/Navbar";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import "./MainPage.scss";
import Feeds from "./Feeds";
import Sidebar from "./Components/Sidebar";

class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar title="Westagram" />
        <MainPageLayout>
          <Feeds />
          <Sidebar />
        </MainPageLayout>
      </>
    );
  }
}

export default MainPage;
