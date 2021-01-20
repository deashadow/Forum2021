import logo from "./logo.svg";
import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import { uuid } from "uuidv4";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function Question() {
  const [cid, setCid] = useState("");
  const [question, setQuestion] = useState("");

  /* const displayInfo = () => {
  console.log(username + " " + password)
}; */

  const addQuestion = () => {
    Axios.post("http://localhost:5000/Question", {
      cid: cid,
      question: question,
    }).then(() => {
      console.log("Success! Your question has been saved to the database");
      alert('Your question has been added!!')
    });
  };

  /* class addQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      questions: []
     };
    
     this.sendPost = (id) => {
      console.log("sendPost");
      const data = { cid: 1, question: "" };
      fetch(`http://localhost:5000/questions/${id}`, {
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
  } */
  // render(){
  return (
    <div class="container-fluid">
      <div class="row row-height">
        <div class="col-sm-3">
          <header className="App-header">
            <Link to="/Forum"> Back to Forum</Link>
            <h3>Mayan Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="text"
                  placeholder="enter cid #1"
                  onChange={(event) => {
                    setCid(event.target.value);
                  }}
                  required
                />
                <input
                  class="question"
                  type="text"
                  onChange={(event) => {
                    setQuestion(event.target.value);
                  }}
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button
                  onClick={addQuestion}
                  type="button"
                  className="btn btn-warning btn-lg active"
                >
                  Submit Question
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
                  type="text"
                  placeholder="enter cid #2"
                  onChange={(event) => {
                    setCid(event.target.value);
                  }}
                  required
                />
                <input
                  class="question"
                  type="text"
                  onChange={(event) => {
                    setQuestion(event.target.value);
                  }}
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button
                  onClick={addQuestion}
                  type="button"
                  className="btn btn-warning btn-lg active"
                >
                  Submit Question
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
                  type="text"
                  placeholder="enter cid #3"
                  onChange={(event) => {
                    setCid(event.target.value);
                  }}
                  required
                />
                <input
                  class="question"
                  type="text"
                  onChange={(event) => {
                    setQuestion(event.target.value);
                  }}
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button
                  onClick={addQuestion}
                  type="button"
                  className="btn btn-warning btn-lg active"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </header>
        </div>

        <div class="col-sm-3">
          <header className="App-header">
            <Link to="/Forum"> Back to Forum</Link>
            <h3>Sumaritan Questions</h3>
            <form>
              <div className="form-group">
                <input
                  class="question"
                  type="text"
                  placeholder="enter cid #4"
                  onChange={(event) => {
                    setCid(event.target.value);
                  }}
                  required
                />
                <input
                  class="question"
                  type="text"
                  onChange={(event) => {
                    setQuestion(event.target.value);
                  }}
                  placeholder="enter a question here"
                  required
                />
              </div>
              <div>
                <button
                  onClick={addQuestion}
                  type="button"
                  className="btn btn-warning btn-lg active"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </header>
        </div>
      </div>

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
                <img id="businesslogo" src={businessLogo} alt="business logo" />
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

export default Question;
