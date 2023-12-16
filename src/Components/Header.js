import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import About2 from "../Pages/About2";
import About3 from "../Pages/About3";
import Blog from "../Pages/Blog";
import logo192 from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          // fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo192}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              PIOZ-21
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/about2">About2</Nav.Link>
                <Nav.Link href="/about3">About3</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
              <Nav>
                <Button variant="outline-info">Search</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about2" component={About2} />
            <Route exact path="/about3" component={About3} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </>
    );
  }
}
