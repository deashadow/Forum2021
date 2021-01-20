import React from 'react';
import loginImg from "./login.svg";
import { useState } from 'react'
import Axios from 'axios';
import { Link } from "react-router-dom";





function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

/* const displayInfo = () => {
    console.log(username + " " + password)
}; */

const addUser = () =>{
    Axios.post('http://localhost:5000/login', 
    {username:username, password:password}).then(()=>{
        console.log("Success! Your information has been saved to the database")
        alert('Your have logged in successfully!!')
    })
};
    return (
         <div className="container-fluid">
            <div className="header"></div>
            <div className="content">
                <div classname="image">
                    <img src={loginImg}  />
                </div>
                <div className="form">
                    <form>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" onChange={(event) => {setUsername(event.target.value)}}  placeholder="enter your username" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" onChange={(event) => {setPassword(event.target.value)}}name="password"  placeholder="enter your password" required/>
                    </div>
                    </form>
                </div>
            </div>
        <div className="footer">
            <button onClick={addUser} type="button" className="btn btn-warning btn-lg active"><Link to="/Forum">Login</Link></button>
        </div>
        </div>
     );
    }
  
    export default Login;