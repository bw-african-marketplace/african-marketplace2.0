import React, { Component } from "../../node_modules/react";
import axios from "../../node_modules/axios";
// import MarketPlace from "../components/UI-Components/MarketPlace";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      department: ""
    };
  }

  render() {
    const { firstName, department, username, password } = this.state;
    return (
      <div>
        <div>Register</div>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="Enter your first name."
          value={firstName}
          onChange={this.handleChange}
        /> */}
          {/* <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Enter your last name."
          value={lastName}
          onChange={this.handleChange}
        /> */}
          <label htmlFor="email">Department</label>
          <input
            name="department"
            type="text"
            placeholder="Enter your user department."
            value={department}
            onChange={this.handleChange}
          />
          <label htmlFor="email">User Name</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your user name."
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password."
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    event.preventDefault();
    const localProps = this.props
    axios
      .post("https://african-marketplace.herokuapp.com/auth/register", {
        username: this.state.userName,
        password: this.state.password
      })
      .then(() => {
        localProps.props.history.push("/MarketPlace");
      })

      .catch(e => {
        console.log("shitz on fire");
      });

  };
}

export default LoginForm;
