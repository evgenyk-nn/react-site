import React, { Component } from "react";
import { Form, Button, Container, FormLabel } from "react-bootstrap";

export default class ContactsBoxMyComponent extends Component {
  render() {
    return (
      <Container style={{ width: "800px" }}>
        <div style={{ marginTop: "15px" }}></div>
        <h1 className="text-center">Связаться с нами</h1>
        <div style={{ marginTop: "20px" }}></div>
        <Form>
          <Form.Group controlId="FormBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              Rest assured, we respect your privacy. Your email address will not
              be shared with anyone.
            </Form.Text>
          </Form.Group>

          <div style={{ marginTop: "30px" }}></div>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <Button variant="primary" type="submit">
              {" "}
              Submit{" "}
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
