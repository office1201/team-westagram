import React, { Component } from "react";

class FormLayout extends Component {
  render() {
    return <div className="Form">{this.props.children}</div>;
  }
}

export default FormLayout;
