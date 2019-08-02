import React, { Component } from "../../../node_modules/react";
import axios from "../../../node_modules/axios";
import MarketPlace from "./MarketPlace";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    const { firstName, lastName, userName, password } = this.state;
    return (
      <div className="LoginForm">
        <div>
        
          <b> Login Below </b>
        </div>
        <p />
        <form onSubmit={this.handleSubmit}>
         
          <label htmlFor="email">User Name: &nbsp; </label>
          <input
            name="userName"
            type="text"
            placeholder="Enter your user name."
            value={userName}
            onChange={this.handleChange}
          />
          <label htmlFor="email">&nbsp;&nbsp;Password: &nbsp; </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password."
            value={password}
            onChange={this.handleChange}
          />
          &nbsp;&nbsp;
          <button style={{backgroundColor: "#e94c3d", padding: "3px"}} type="submit"> Submit</button>
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
    const localProps = this.props;
    return axios
      .post("https://african-marketplace.herokuapp.com/auth/login", {
        username: this.state.userName,
        password: this.state.password
      })
      .then((res) => { console.log(res); localStorage.setItem('token', res.data.token)
        localProps.props.history.push("/BusinessProfile");
      })

      .catch(e => {
        console.log("Catch, ish on fire");
      });
  };
}

export default LoginForm;
