import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";

import { Menu, Dropdown, Card } from "antd";

const gridStyle = {
  width: "100",
  textAlign: "center",
  fontWeight: 600,
  height: "270px",

};

const Styles = () => {
  return (
    <div
      className="carde"
       style={{ margin: 25 }}
    >
      <h2 style={{ color: "white", paddingTop: 80, textAlign: "center" }}>
        Share Your Art Now
      </h2>
      <h2 style={{ color: "white", paddingTop: 75, textAlign: "center" }}>
        Seperate Yourself from the Crowd
      </h2>
    </div>
  );
};
export default Styles;
