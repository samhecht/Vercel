import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div style={{ backgroundColor: "#Fff", maxHeight: 1000 }}>
      <Row
        style={{
          justifyContent: "center",
          margin: "auto",
          alignContent: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <h1
          style={{
            color: "black",
            textAlign: "center",
            marginTop: 50,
            marginBottom: 10,
          }}
        >
          {" "}
          Roadmap
        </h1>
      </Row>{" "}
      <Row
        style={{
          justifyContent: "right",
          margin: "auto",
          alignContent: "right",
          paddingTop: 10,
          paddingBottom: 50,
        }}
      >
        <Col sm={24} lg={3} style={{ marginTop: 50 }}>
          <h4 style={{ textAlign: "left", margin: 10 }}> Competition I</h4>
          <div className="a-box">
            <p style={{ paddingTop: 10 }}>
              {" "}
              Find the winner of the Golden Frame Competition.
            </p>
          </div>
        </Col>

        <Col sm={24} lg={3} style={{ marginTop: 50 }}>
          <h4 style={{ textAlign: "left", margin: 10 }}> Drop</h4>
          <div className="a-box">
            <p style={{ paddingTop: 10 }}>
              {" "}
              The next sale of EVO-NFTs, availible to the public on October 9th,
              2021{" "}
            </p>
            <p> </p>
          </div>
        </Col>

        <Col sm={24} lg={3} style={{ marginTop: 50, marginBottom: 50 }}>
          <h4 style={{ textAlign: "left", margin: 10 }}>New Artists</h4>
          <div className="a-box">
            <p style={{ paddingTop: 10 }}>
              {" "}
              The DAO votes on those who have applied to become an EVO-Artist.{" "}
            </p>
          </div>
        </Col>

        <Col sm={24} lg={3} style={{ marginTop: 50, marginBottom: 0 }}>
          <h4 style={{ textAlign: "left", margin: 10 }}>Competition II</h4>
          <div className="a-box">
            <p style={{ paddingTop: 10 }}>
              {" "}
              Launch the Golden Frame II with a public popularity ranking.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Roadmap;
