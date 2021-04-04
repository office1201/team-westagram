import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginHeeyeol from "./pages/heeyeolKim/Login/Login";
import MainHeeyeol from "./pages/heeyeolKim/Main/Main";

import LoginJongho from "./pages/jonghoLee/Login/Login";
import MainJongho from "./pages/jonghoLee/Main/Main";

import LoginTaehyun from "./pages/taehyunKim/Login/Login";
import MainTaehyun from "./pages/taehyunKim/Main/Main";

import LoginJaeyoung from "./pages/jaeyoungLee/Login/Login";
import MainJaeyoung from "./pages/jaeyoungLee/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-taehyun" component={LoginTaehyun} />
          <Route exact path="/main-taehyun" component={MainTaehyun} />

          <Route exact path="/login-heeyeol" component={LoginHeeyeol} />
          <Route exact path="/main-heeyeol" component={MainHeeyeol} />

          <Route exact path="/login-jongho" component={LoginJongho} />
          <Route exact path="/main-jongho" component={MainJongho} />

          <Route exact path="/login-jaeyoung" component={LoginJaeyoung} />
          <Route exact path="/main-jaeyoung" component={MainJaeyoung} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
