import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Comments() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const addComment = () => {
      console.log(addComment)
    Axios.post("http://localhost:5000/Comments", {
      username: username,
      comment: comment,
    }).then(() => {
      console.log("Success! Your comment has been saved to the database");
      alert("Your have added your comment successfully!!");
    });
  };

  return (
    <div id="commentpage" class="container-fluid">
    <div className="form">
       <form>
        <div id="comments">
          <input
            class="comment1"
            type="textera"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            placeholder="Enter your username here"
            required
          />
        </div>
        <div id="comments">
          <input
            class="comment"
            type="textera"
            onChange={(event) => {
              setComment(event.target.value);
            }}
            placeholder="Enter your comments here"
            required
          />
        </div>
        <br></br>
        <button type="button" onClick={addComment} class="btn btn-warning mb-2">
        <Link to="/Forum">Submit</Link>
        </button>
      </form>
      <Link to="/Forum">Back to Forum</Link>
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

export default Comments;
