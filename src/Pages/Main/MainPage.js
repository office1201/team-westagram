import React, { Component } from "react";
import MainPageLayout from "./Components/MainPageLayout";
import Navbar from "./Components/Navbar";
import "../../Styles/reset.scss";
import "../../Styles/common.scss";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <MainPageLayout>
        <Navbar title="Westagram" />
      </MainPageLayout>
    );
  }
}

export default MainPage;
