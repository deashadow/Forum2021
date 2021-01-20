import express from "express";
import Router from "express-promise-router";
import bodyParser from "body-parser";
import userQuestions from "./routes/questions.js";
import userAnswers from "./routes/answers.js";
import forumRoutes from "./routes/forumRouter.js";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "studentdb",
});

app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const home = (request, response) => {
  response.send("hi there-- I am working");
};
app.post("/login", (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  db.query(
    "INSERT INTO users ( username, password) VALUES ( ?, ?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send("Your values have been inserted into the database");
      }
    }
  );
});

app.post("/Question", (request, response) => {
  const cid = request.body.cid;
  const question = request.body.question;

  db.query(
    "INSERT INTO questions ( cid, question) VALUES ( ?, ?)",
    [cid, question],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send("Your question has been inserted into the database");
      }
    }
  );
});

app.get("/", home); // localhost:3000/
app.use("/questions", userQuestions); // localhost:3000/mquestions
app.use("/answers", userAnswers); // localhost:3000/mquestions
app.use("/forumRouter", forumRoutes); // localhost:3000/api

app.listen(port, () => console.log("listening on port " + port));
