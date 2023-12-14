import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1Img from "../assets/image1.jpg";
import image2Img from "../assets/image2.jpg";
import image3Img from "../assets/image3.jpg";
import image4Img from "../assets/image4.jpg";
import image5Img from "../assets/image5.jpg";
import image6Img from "../assets/image6.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image2Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image3Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image4Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image5Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={image6Img} />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, est?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
