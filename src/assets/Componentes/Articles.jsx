import React from "react";
import { Carousel } from "react-bootstrap";

class Articles extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/fundo.jpg"
            alt="Primeiro Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Jim.gif"
            alt="Segundo Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/café.gif"
            alt="Terceiro Slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Articles;
