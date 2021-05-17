import React, { Component } from "react";
import FormLayout from "./FormLayout";
import Logo from "./Logo";
import Input from "./Input";
import "./Form.scss";

class Form extends Component {
  render() {
    const { type, data } = this.props;
    return (
      <FormLayout>
        <Logo />
        <div>
          {data.map((input, idx) => (
            <Input key={idx} type={input.type} text={input.text} />
          ))}
        </div>
      </FormLayout>
    );
  }
}

export default Form;
