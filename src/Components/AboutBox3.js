import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import "../App.css";

const sections = [
  {
    key: "first",
    title: "Россия",
    content: (
      <>
        <iframe
          title="Russia"
          width="100%"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=36.12579345703126%2C54.909777539554845%2C38.64715576171876%2C56.24792820319822&amp;layer=mapnik"
          style={{ border: "1px solid teal" }}
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=9/55.5842/37.3853">
            Посмотреть более крупную карту
          </a>
        </small>
      </>
    ),
  },

  {
    key: "second",
    title: "Беларусь",
    content: (
      <>
        <iframe
          title="Belarus"
          width="100%"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=27.273559570312504%2C53.70768148919932%2C28.179931640625004%2C54.05737271726998&amp;layer=mapnik"
          style={{ border: "1px solid teal" }}
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=11/53.8829/27.7270">
            Посмотреть более крупную карту
          </a>
        </small>
      </>
    ),
  },

  {
    key: "third",
    title: "Украина",
    content: (
      <>
        <iframe
          title="Ukraine"
          width="100%"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=30.07781982421875%2C50.212943287278684%2C30.984191894531254%2C50.59108378226446&amp;layer=mapnik"
          style={{ border: "1px solid teal" }}
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=11/50.4024/30.5313">
            Посмотреть более крупную карту
          </a>
        </small>
      </>
    ),
  },

  {
    key: "fourth",
    title: "Европа",
    content: (
      <>
        <iframe
          title="Europe"
          width="100%"
          height="400"
          style={{ border: "1px solid red" }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=4.3691468238830575%2C50.835838852935936%2C4.397470951080323%2C50.84754585751373&amp;layer=mapnik"
          style={{ border: "1px solid teal" }}
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=16/50.8417/4.3833">
            Посмотреть более крупную карту
          </a>
        </small>
      </>
    ),
  },
];

export default class AboutBox extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={sections[0].key}
          >
            <Row>
              <Col md={3} lg={2}>
                <Nav variant="pills" className="Flex-colum mt-2">
                  {sections.map((section) => (
                    <Nav.Item key={section.key}>
                      <Nav.Link eventKey={section.key}>
                        {section.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col md={9} lg={10}>
                <Tab.Content className="mt-3">
                  {sections.map((section) => (
                    <Tab.Pane key={section.key} eventKey={section.key}>
                      {section.content}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
