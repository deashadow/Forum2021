import logo from "./logo.svg";
import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import { uuid } from "uuidv4";
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";

function Home() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Mayan Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="input"
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button type="button" className="btn btn-warning btn-lg active">
                  Send-POST Submit
                </button>
              </div>
            </form>
          </header>
        </div>

        <div class="col-sm-3">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Inca Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="textera"
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button type="button" className="btn btn-warning btn-lg active">
                  Send-POST Submit
                </button>
              </div>
            </form>
          </header>
        </div>

        <div class="col-sm-3">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Egyptian Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="textera"
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button type="button" className="btn btn-warning btn-lg active">
                  Send-POST Submit
                </button>
              </div>
            </form>
          </header>
        </div>

        <div class="col-sm-3">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Sumaritan Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="textera"
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button type="button" className="btn btn-warning btn-lg active">
                  Send-POST Submit
                </button>
              </div>
            </form>
          </header>
        </div>
      </div>

      
        <footer id="homefooter" className="fixed-bottom font-small special-color-dark pt-4">
          <div className="container-fluid1 text-center text-md-center">
            <div className="row">
              <div className="col-md-12 mt-md-0 mt-3">
                <h5 id="forumfooter" className="text-uppercase">
                  Ronald Rendessy
                </h5>
                <p> Full Stack Web Developer</p>
                <a href="https://sflluxuryhomesearch.com/">
                  <img
                    id="businesslogo"
                    src={businessLogo}
                    alt="business logo"
                  />
                </a>
              </div>
            </div>
            <div id="forumfooter" className="footer-copyright text-center py-3">
              © 2021 Copyright: RR <br></br>
              <a href="https://sflluxuryhomesearch.com/"> RR.com</a>
            </div>
          </div>
        </footer>
      </div>
    
  );
}

export default Home;
