import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Button, Col, Row, NavLink } from "reactstrap";
import "react-multi-carousel/lib/styles.css";
import { Menu, Dropdown, Card } from "antd";



const Style = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
  return (
    <Row
      style={{
        justifyContent: "center",
        margin: "auto",
        marginBottom: "0px",
        width: "1200px",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Carousel
        centerMode={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
        style={{ justifyContent: "center", margin: "auto" }}
      >
        <div className="car1">
          {" "}
          <h5 className="stylename">Pixels</h5>
        </div>

        <div className="car1">
          {" "}
          <h5 className="stylename">Minimalism</h5>
        </div>

        <div className="car1">
          {" "}
          <h5 className="stylename">Photography</h5>
        </div>

        <div className="car1">
          {" "}
          <h5 className="stylename">Generative</h5>
        </div>
      </Carousel>
    </Row>
  );
};
export default Style;
