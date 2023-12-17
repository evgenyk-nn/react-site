import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Card, CardGroup, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    const cardStyle = {
      marginBottom: "20px",
    };
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our Team</h2>
          <div className="card-container">
            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  dolore placeat quibusdam ea quo vitae magni quis enim qui quis
                  quo nemo aut saepe quidem repellat excepturi ut quia sunt ut
                  sequi eos ea sed quas
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Testing Engineers</Card.Title>
                <Card.Text>
                  dolore placeat quibusdam ea quo vitae magni quis enim qui quis
                  quo nemo aut saepe quidem repellat excepturi ut quia sunt ut
                  sequi eos ea sed quas
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </Card>

            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Card.Body>
                <Card.Title>DevOps Engineers</Card.Title>
                <Card.Text>
                  dolore placeat quibusdam ea quo vitae magni quis enim qui quis
                  quo nemo aut saepe quidem repellat excepturi ut quia sunt ut
                  sequi eos ea sed quas
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}

// import React, { Component } from "react";
// import CarouselBox from "../Components/CarouselBox";
// import { Container, CardDeck, Card, Button } from "react-bootstrap";

// export default class Home extends Component {
//   render() {
//     return (
//       <>
//         <CarouselBox />
//         <Container>
//           <h2 className="text-center m-4">Our Team</h2>
//           <CardDeck>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
//               />
//               <Card.Body>
//                 <Card.Title>Developers</Card.Title>
//                 <Card.Text>
//                   dolore placeat quibusdam ea quo vitae magni quis enim qui quis
//                   quo nemo aut saepe quidem repellat excepturi ut quia sunt ut
//                   sequi eos ea sed quas
//                 </Card.Text>
//                 <Button variant="primary">About team</Button>
//               </Card.Body>
//             </Card>
//           </CardDeck>
//         </Container>
//       </>
//     );
//   }
// }
