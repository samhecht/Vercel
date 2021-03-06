import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const Z1M = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Row style={{ paddingTop: 100 }}>
        <Col lg={3} style={{ marginTop: 0 }}>
          <div className="AIMG">
            {" "}
            <Image src="/images/Z1M/Z-4.jpg" width={400} height={400}></Image>
          </div>
        </Col>

        <Col lg={3} style={{ marginTop: 0 }}>
          <div className="AIMG">
            {" "}
            <Image src="/images/Z1M/Z-1.jpg" width={500} height={500}></Image>
          </div>
        </Col>

        <Col lg={3} style={{ marginTop: 0 }}>
          <div className="AIMG">
            {" "}
            <Image src="/images/Z1M/Z-2.jpg" width={500} height={500}></Image>
          </div>
        </Col>

        <Col lg={3} style={{ marginTop: 0 }}>
          <div className="AIMG">
            {" "}
            <Image
              src="/images/Z1M/Z-3.jpg"
              className="BIMG"
              width={500}
              height={500}
            ></Image>
          </div>
        </Col>
      </Row>

      <Col lg={24} style={{ margin: 50, marginBottom: 50 }}>
        <Link href="/Kyule">
          <Button className="btn-box1" style={{ fontWeight: 500 }}>
            Prev
          </Button>
        </Link>

        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            width: 360,
            margin: 50,
          }}
        >
          <h1
            style={{
              fontSize: 50,
              fontWeight: 600,
            }}
          >
            Z1MPLEX{" "}
          </h1>
          <h5 style={{ marginBottom: 10 }}>
            TOMFUNK based in Thailand is the founder and mixologist of Z1MPLEX
            MIXOLOGY LABORATORY, the only bar in Phuket in Thailand that serves
            a truly artistic shooter. Tom picks some of his masterpieces and
            twists their perspective into unique generative NFT art.
          </h5>
          <a href="https://twitter.com/EVODAOnft">
            {" "}
            <img
              src="/images/Icons/twitter.png"
              className="icon"
              style={{ height: 25, width: 25, justifyContent: "center" }}
            />{" "}
          </a>
        </div>
        <Link className="btn" href="/Members">
          <Button className="btn-box1" style={{ fontWeight: 500 }}>
            Digital Eyes
          </Button>
        </Link>

        <Link className="btn" href="/Members">
          <Button
            className="btn-box1"
            style={{ fontWeight: 500, marginLeft: 10 }}
          >
            Magic Eden
          </Button>
        </Link>

        <Link className="btn" href="/Members">
          <Button
            className="btn-box1"
            style={{ fontWeight: 500, marginLeft: 10 }}
          >
            Metaplex
          </Button>
        </Link>
      </Col>
    </div>
  );
};
export default Z1M;
