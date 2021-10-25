import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";
import Link from "next/link";
import { Menu, Dropdown, Card } from "antd";
import Header from "../Misc/Header";
import LikeButton from "../LikeButton/LikeButton";
import Button1 from "../Button/MarketplaceButton";

const ImgS = () => {
  return (
    <div>
      <Header />
      <Row
        style={{
          backgroundColor: "white",
          height: "1000px",
          paddingTop: 150,
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Col sm={24} lg={6}>
          <div
            className="cardd"
            style={{
              backgroundColor: "grey",
              width: 500,
              height: 450,
              marginBottom: 20,
            }}
          >
            {" "}
          </div>
        </Col>
        <Col sm={24} lg={4} style={{ margin: 20 }}>
          <div>
            <Row style={{ width: 300, color: "black" }}>
              <LikeButton />
              <p>100</p>
            </Row>
            <h3 style={{ marginBottom: "25px" }}>Art Title</h3>
          </div>
          <p style={{ marginBottom: "25px", maxWidth: 400 }}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores{" "}
          </p>
     
<Button1 style={{marginLeft:"-50px"}}></Button1>

        </Col>
      </Row>
    </div>
  );
};
export default ImgS;
