import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const Kyule = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Row
          style={{
            justifyContent: "right",
            margin: "auto",
            alignContent: "right",
            paddingTop: 100,
          }}
        >
          <Col lg={5} style={{ marginTop: 150 }}>
            <Link href="/DizzyJay">
              <Button className="btn-box1" style={{ fontWeight: 500 }}>
                Prev
              </Button>
            </Link>

            <Link href="/Vibe">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Next
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
                Kyule{" "}
              </h1>
              <h5 style={{ marginBottom: 10 }}>
                A painter said to be wandering the southern swampland. Inspired
                through visual hallucinations, he creates only when the swamp
                mother blesses him with visions.
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
            <Link href="/Members">
              <Button className="btn-box1" style={{ fontWeight: 500 }}>
                Digital Eyes
              </Button>
            </Link>
            <Link href="/Members">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Magic Eden
              </Button>
            </Link>
            <Link href="/Members">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Metaplex
              </Button>
            </Link>
          </Col>

          <Col
            span={12}
            style={{
              justifyContent: "right",
              margin: "auto",
              alignContent: "right",
              textAlign: "right",
            }}
          >
            <Col lg={6} style={{ marginTop: 0 }}>
              <div className="AIMG">
                {" "}
                <Image
                  src="/images/Kyule/K-1.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </Col>
            <Col>
              <Col lg={6} style={{ marginTop: 20 }}>
                <div className="AIMG">
                  {" "}
                  <Image
                    src="/images/Kyule/K-2.jpg"
                    width={500}
                    height={500}
                  ></Image>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Kyule;

