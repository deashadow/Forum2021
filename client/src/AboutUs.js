import React, { Component } from "react";
import businessLogo from "./businessLogo.jpg";
import "./App.css";
import logo from "./logo.svg";
import Sanibel from "./Sanibel.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container-sm">
            <img
              className="Sanibelpic"
              id="Sanibel"
              src={Sanibel}
              alt="island pic"
            />
          </div>
          <p> I am a Full Stack Web Developer</p>
        </div>

        <div></div>
        <h5>
          <strong>Ronald Rendessy, Realtor, MBA</strong>
        </h5>
        <h4>Full Stack Web Developer</h4>
        <div>
          <a href="https://sflluxuryhomesearch.com/">
            <img
              className="App-header1"
              id="businesslogo"
              src={businessLogo}
              alt="business logo"
            />
          </a>
        </div>
      </div>
    );
  }
}
export default AboutUs;
