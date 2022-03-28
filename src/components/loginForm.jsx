import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import * as authService from "../services/authService.js";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await authService.login(
        data.username,
        data.password
      );

      localStorage.setItem("token", jwt);

      // this.props.navigate("/");
      window.location = "/"; //full reload
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default function LoginFormFunction(props) {
  return <LoginForm {...props} params={useParams()} navigate={useNavigate()} />;
}
