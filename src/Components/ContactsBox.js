import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "../App.css";

const ContactsBox = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://yastatic.net/s3/frontend/forms/_/embed.js";
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        marginTop: "20px",
        borderRadius: "10px",
        overflow: "hidden",
        width: "800px",
        margin: "0 auto",
      }}
    >
      {scriptLoaded && (
        <Form>
          <Row>
            <Col md={12}>
              <div className="contacts-header">
                <div style={{ marginTop: "15px" }}></div>
                <h1>Контакты</h1>
                <div style={{ marginTop: "30px" }}></div>
              </div>
              <iframe
                src="https://forms.yandex.ru/cloud/656c5896c769f196fbaa4159/?iframe=1"
                title="Contact Form"
                name="ya-form-656c5896c769f196fbaa4159"
                width="100%"
                height="100vh"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  display: "block",
                }}
              ></iframe>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default ContactsBox;
