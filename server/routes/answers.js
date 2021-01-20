import express from "express";
import { v4 as uuidv4 } from "uuid";
import Router from "express-promise-router";
import { dbQueryAnswers } from "../model/dbHelper.js";

const router = Router();

const queryAnswers = async (request, response) => {
  let answers = [];
  let { id } = request.params;
  answers = await dbQueryAnswers(id);
  answers.forEach((answer) => {
    console.log(answer);
  });
  console.log("GET: answers=" + JSON.stringify(answers));
  response.send(answers);
  const context = { answers: answers };
  response.status("answers", context);
};

/* const insertQuestion = async (request, response) => {
    let question = request.body;
    const newQuestion = { "id": id, ...question };
    console.log('POST: question=' + JSON.stringify(newQuestion));
    questions = [...questions, newQuestion];
    await dbInsertQuestion(newQuestion);
    response.send(`${newQuestion.cid}: ${newQuestion.category}, ${newQuestion.question} added`);
} */

/* const updateUser = async (request, response) => {
    console.log(JSON.stringify(request.params))
    const {id} = request.params; //const id = request.params['id'];
    const {fname, lname} = request.body
    console.log(`fname=${fname} lname=${lname}`);
    //let user = users.find( user => user.id === id);
    let user = await dbQueryUser( id);
    if (!user) {
        response.send(`UPDATE: ${user} not found`)
        return;
    }
    if (fname) user.fname = fname;
    if (lname) user.lname = lname;
    await dbUpdateUser( user);
    console.log(`${user.id}: ${user.fname}, ${user.lname} updated`);
    response.send(`${user.id}: ${user.fname}, ${user.lname} updated`);
} */

/* const deleteQuestion = async (request, response) => {
    console.log('deleteQuestion called')
    const {id} = request.params; //const id = request.params['id'];
    questions = questions.filter( question => question.id !== id);
    await dbDeleteQuestion( id); 
    console.log(`DELETE: id=${id} deleted`);
    response.send(`DELETE: id=${id} deleted`);
}  */

router.get("/:id", queryAnswers); //localhost:3000/answers/
//router.post('/', insertAnswer);  //localhost:3000/answers/
//router.delete('/:id', deleteAnswer);
//router.patch('/:id', updateAnswer);//localhost:3000/answers/002 */

export default router;
