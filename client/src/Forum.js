import logo from "./logo.svg";
import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Link } from "react-router-dom";
//import { uuid } from "uuidv4";
import React, { Component } from "react";
//import { connect } from "react-redux";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = { expressResponse: "waiting to get your questions" };

    this.sendGet = (id) => {
      console.log("sendGet");
      fetch(`http://localhost:5000/questions/${id}`, {
        method: "GET",
      }).then((res) => res.text())
        .then((data) => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch((err) => console.error("Error:", err));
    };

    this.sendPost = () => {
      console.log("sendPost");
      const data = { cid: 1, question: "" };
      fetch(`http://localhost:5000/questions`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch((err) => console.error("Error:", err));
    };

    this.sendPatch = () => {
      console.log("sendPatch");
      const data = { id: 1 };
      fetch(`http://localhost:5000/questions/123`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch((err) => console.error("Error:", err));
    };

    this.sendDelete = () => {
      console.log("sendDelete");
      fetch(`http://localhost:5000/forum/123`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch((err) => console.error("Error:", err));
    };
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <header className="App-header">
              <h3>Choose a Category to Start</h3>
              <Link to="/">Back to Home</Link>
              <br></br>
              <div>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    this.sendGet(1);
                  }}
                >
                  Mayan Questions
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    this.sendGet(2);
                  }}
                >
                  Inca Questions
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    this.sendGet(3);
                  }}
                >
                  Egyptian Questions
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    this.sendGet(4);
                  }}
                >
                  Sumaritan Questions
                </button>
              </div>
            </header>
          </div>
          <br></br>
          <div className="col-sm-4 mt-4">
            <p id="addquestion">{this.state.expressResponse}</p>
          </div>

          <div class="col-sm-4">
            <div>
              <form >
                <a id="addquestion" href="/addQuestion" role="button" class="btn btn-primary btn-lg">
                  Add a Question Here
                </a>
              </form>
            </div>
          </div>
        </div>

        <div>
          <footer
            id="homefooter"
            className="fixed-bottom font-small special-color-dark pt-4"
          >
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
              <div
                id="forumfooter"
                className="footer-copyright text-center py-3"
              >
                © 2020 Copyright: RR <br></br>
                <a href="https://sflluxuryhomesearch.com/"> RR.com</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Forum;