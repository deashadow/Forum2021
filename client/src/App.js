import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home";
import Forum from "./Forum";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NavB from "./NavB";
import { BrowserRouter, Route, Switch, Prompt } from "react-router-dom";
import { Login, Register } from "./components/login/index";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavB />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/Forum"  component={Forum} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
          <Prompt message="Are you sure you want to leave??"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;