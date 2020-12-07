
import React, { Component } from "react";
 import { Link, } from "react-router-dom";
import "../Login/main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: "",
      passInput: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      emailInput: e.target.value,
    });
  };

  handlePassChange = (e) => {
    this.setState({
      passInput: e.target.value,
    });
  };

  handleLoginSubmit = (e) => {
    this.setState({
      emailInput: '',
      passInput:''
    })
    const {history} = this.props;
    e.preventDefault();
    let hardcodedCred1 = {
      emailInput: "reema@gmail.in",
      passInput: "dec@2020",
    };
    let hardcodedCred2 = {
      emailInput: "riya@gmail.in",
      passInput: "nov@2020",
    };
    if (
      this.state.emailInput == hardcodedCred1.emailInput &&
      this.state.passInput == hardcodedCred1.passInput
    ) {
      history.push('/productlist');
    } else {
      if (
        this.state.emailInput == hardcodedCred2.emailInput &&
        this.state.passInput == hardcodedCred2.passInput
      ) {
        history.push('/productlist');
      } else {
        alert("Please enter the vaild email and password");
      }
    }
  };

  render() {

    return (
      <React.Fragment>
        <div className="input_container">
          <h1 style={{fontSize:'41px', fontWeight:'bold'}}>Sign In</h1>
          <input
            type="email"
            name="emailInput"
            value={this.state.emailInput}
            onChange={this.handleEmailChange}
            placeholder="Email id"
          />
          <br />
          <input
            type="password"
            name="passInput"
            value={this.state.passInput}
            onChange={this.handlePassChange}
            placeholder="password"
          />
          <br />

          <button type="submit" onClick={this.handleLoginSubmit}>
            SIGN IN
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
