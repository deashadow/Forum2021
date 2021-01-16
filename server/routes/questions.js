import express from 'express';
import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router'; 
import {dbQueryQuestions, dbInsertQuestions, dbDeleteQuestions} from '../model/dbHelper.js'


const router = Router();

const queryQuestions = async (request, response) => {
    let questions = [];
    let {id} = request.params
    questions = await dbQueryQuestions(id)
    questions.forEach( question => {
        console.log( question)
    })
    console.log('GET: questions='+JSON.stringify(questions));
    response.send(questions);
    const context = {"questions": questions }
    response.status('questions', context)
}



const insertQuestion = async (request, response) => {
    let question = request.body;
    const newQuestion = { "id": id, ...question };
    console.log('POST: question=' + JSON.stringify(newQuestion));
    questions = [...questions, newQuestion];
    await dbInsertQuestion(newQuestion);
    response.send(`${newQuestion.cid}: ${newQuestion.category}, ${newQuestion.question} added`);
}



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

 const deleteQuestion = async (request, response) => {
    console.log('deleteQuestion called')
    const {id} = request.params; //const id = request.params['id'];
    questions = questions.filter( question => question.id !== id);
    await dbDeleteQuestion( id); 
    console.log(`DELETE: id=${id} deleted`);
    response.send(`DELETE: id=${id} deleted`);
} 

router.get('/:id', queryQuestions);  //localhost:3000/questions/
router.post('/', insertQuestion);  //localhost:3000/users/
router.delete('/:id', deleteQuestion);
//router.patch('/:id', updateUser);//localhost:3000/users/002 */

export default router;
