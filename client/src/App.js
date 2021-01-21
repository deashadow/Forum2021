import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home";
import Forum from "./Forum";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import addQuestion from "./addQuestion";
import Comments from "./Comments";
import NavB from "./NavB";
import { BrowserRouter, Route, Switch, Prompt } from "react-router-dom";
import  Login from "./Login";

// import React, { Component } from 'react'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavB />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login"  component={Login} />
          <Route path="/Forum"  component={Forum} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/addQuestion" component={addQuestion} />
          <Route path="/Comments"  component={Comments} />
          <Prompt message="Are you sure you want to leave??"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
