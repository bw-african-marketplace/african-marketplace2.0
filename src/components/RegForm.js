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
        <div>Register Below</div>
        <p/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Department: &nbsp; </label>
          <input
            name="department"
            type="text"
            placeholder="Enter your user department."
            value={department}
            onChange={this.handleChange}
          />
          <label htmlFor="email">&nbsp;&nbsp;User Name:&nbsp;</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your user name."
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">&nbsp;&nbsp;Password:&nbsp;</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password."
            value={password}
            onChange={this.handleChange}
          />&nbsp;
          <button style={{backgroundColor: "#e94c3d", padding: "3px"}} type="submit">Submit</button>
          <br/>
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
