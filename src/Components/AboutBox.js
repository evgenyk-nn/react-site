import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import "../App.css";

export default class AboutBox extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md={2} lg={1}>
                <Nav variant="pills" className="Flex-colum mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="third">Programming</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={9} lg={10}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <img
                      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/338308523/original/003cc871f5bf08930f0bf221f40dce74e634beea/make-figma-website-website-ui-website-ui-ux-design.png"
                      className="mr-3"
                    />
                    <p>
                      {" "}
                      Some text. Some text. Some text. Some text. Some text.
                      Some text. Some text. Some text. Some text.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/322831328/original/11c82a65991aed1e26a0a54d202a0f95c7619fb3/do-a-professional-ui-ux-web-design-for-your-website-with-figma.png" />
                    <p>
                      {" "}
                      Some text. Some text. Some text. Some text. Some text.
                      Some text. Some text. Some text. Some text.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/275368757/original/81b6946e0b20dea0502492ea02d7619b2be6cf2d/modern-website-ui-mobile-app-ui-landing-page-ui-ux-design-in-figma.png" />
                    <p>
                      {" "}
                      Some text. Some text. Some text. Some text. Some text.
                      Some text. Some text. Some text. Some text.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="fourth">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/322831328/original/11c82a65991aed1e26a0a54d202a0f95c7619fb3/do-a-professional-ui-ux-web-design-for-your-website-with-figma.png" />
                    <p>
                      {" "}
                      Some text. Some text. Some text. Some text. Some text.
                      Some text. Some text. Some text. Some text.
                    </p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="fifth">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/249609104/original/9d9eaa355aedd33f6365849f2a4fb85bcc88c1b8/do-a-modern-figma-website-design-figma-web-design.png" />
                    <p>
                      {" "}
                      Some text. Some text. Some text. Some text. Some text.
                      Some text. Some text. Some text. Some text.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
