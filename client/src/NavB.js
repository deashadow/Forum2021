import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavB extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="d-flex flex-row bd-highlight mb-3">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Navbar.Brand href="/">
                <b>
                  <u>Ancient Cultures Forum 2021</u>
                </b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  
                  <Link to="/AboutUs">
                    <li className="nav-link">AboutUs</li>
                  </Link>
                  <Link to="/ContactUs">
                    <li className="nav-link">ContactUs</li>
                  </Link>
                  
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="To Ancient Cultures"
                    className="mr-sm-3"
                  />
                  <Button variant="outline-success"><a href="https://www.ancienthistorylists.com/ancient-civilizations/10-oldest-ancient-civilizations-ever-existed/">Search</a>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default NavB;
