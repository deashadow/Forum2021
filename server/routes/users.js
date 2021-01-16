/* import {v4 as uuidv4} from 'uuid';
import Router from 'express-promise-router'; 
import {dbQueryUsers, dbInsertUser, dbUpdateUser, dbDeleteUser, dbQueryUser} from '../model/dbHelper.js'


const router = Router();
let users = [];

const queryUsers = async (request, response) => {
    users = await dbQueryUsers()
    users.forEach( user => {
        console.log( user)
    })
    console.log('GET: users='+JSON.stringify(users));
    response.send(users);
    //const context = {"users": users, "title": "This is cool" }
    //response.render('users', context)
}

const addUser = async (request, response) => {
    let user = request.body;
    const newUser = { "id": uuidv4(), ...user };
    console.log('POST: user='+JSON.stringify(newUser));
    users = [...users, newUser];
    await dbInsertUser( newUser);
    response.send(`${newUser.id}: ${newUser.username}, ${newUser.password} added`);
}

const updateUser = async (request, response) => {
    console.log(JSON.stringify(request.params))
    const {id} = request.params; //const id = request.params['id'];
    const {username, password} = request.body
    console.log(`username=${username} password=${password}`);
    //let user = users.find( user => user.id === id);
    let user = await dbQueryUser( id);
    if (!user) {
        response.send(`UPDATE: ${user} not found`)
        return;
    }
    if (username) user.username = username;
    if (password) user.password = password;
    await dbUpdateUser( user);
    console.log(`${user.id}: ${user.username}, ${user.password} updated`);
    response.send(`${user.id}: ${user.username}, ${user.password} updated`);
}

const deleteUser = async (request, response) => {
    console.log('deleteUser called')
    const {id} = request.params; //const id = request.params['id'];
    users = users.filter( user => user.id !== id);
    await dbDeleteUser( id); 
    console.log(`DELETE: id=${id} deleted`);
    response.send(`DELETE: id=${id} deleted`);
}


router.get('/', queryUsers);  //localhost:3000/users/
router.post('/', addUser);  //localhost:3000/users/
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);//localhost:3000/users/002

export default router;



 */