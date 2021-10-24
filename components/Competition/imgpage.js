import React from "react";
import { Container, Button, Col, NavLink } from "reactstrap";
import Link from "next/link";
import {
  collection,
  doc,
  getFirestore,
  increment,
  updateDoc,
} from "@firebase/firestore";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Menu, Dropdown, Card, Row } from "antd";
 import Header from "./Header";
const IMG = ({ artwork_obj}) => {

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
      marginBottom:10
            }}
          >
            {" "}
          </div>
        </Col>
        <Col sm={24} lg={4} style={{margin:20}}>
          <div>
            <Row>
              <HiOutlineChevronDoubleUp className='vote'></HiOutlineChevronDoubleUp>
              <p style={{ color: "black" }}>100</p>
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
          <a href="https://twitter.com/EVODAOnft">
            <p
              className="handle"
              style={{ marginTop: "10px", marginLeft: "-20px" }}
            >
              @twitterhandle
            </p>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default IMG;
