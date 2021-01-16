import express from 'express';
import Router from 'express-promise-router'; 

const router = Router();

const queryApi = async (request, response) => {
    console.log("queryApi")
    response.send('queryAPI called')
}
const addApi = async (request, response) => {
    console.log("addApi")
    let {id} = request.body

    response.send('addApi called id=' + id)
}
const deleteApi = async (request, response) => {
    console.log("deleteApi")
    let {id} = request.params

    response.send('deleteApi called id=' + id)
}
const updateApi = async (request, response) => {
    console.log("updateApi")
    let {id} = request.params

    response.send('updateApi called id=' + id)
}
router.get('/', queryApi);  //localhost:3000/api/
router.post('/', addApi);  //localhost:3000/api/
router.delete('/:id', deleteApi);  //localhost:3000/api/123
router.patch('/:id', updateApi);  //localhost:3000/api/123
export default router;
