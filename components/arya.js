import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const Arya = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
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
            <Link href="/Artists/DizzyJay">
              <Button className="btn-box1" style={{ fontWeight: 500 }}>
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
                  marginBottom: 20,
                }}
              >
                Arya{" "}
              </h1>
              <h5 style={{ marginBottom: 5 }}>
                Every piece of art reflects a feeling. No thoughts are involved
                during creation, only pure emotion uncovered from the depth of
                my soul. Recollection of memories as blissfull or painfull as
                they come. I share these puzzled pieces of my reality for you to
                fit in your own tapestry of life.
              </h5>
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
            }}
          >
            <Col lg={12} style={{ marginTop: 0 }}>
              <div className="AIMG">
                {" "}
                <Image
                  src="/images/Arya/A-4.jpg"
                  width={500}
                  height={500}
                  border={true}
                ></Image>
              </div>
            </Col>

            <Col lg={12} style={{ marginTop: 20 }}>
              <div className="AIMG">
                {" "}
                <Image
                  src="/images/Arya/A-1.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </Col>
          </Col>

          <Col
            span={24}
            style={{
              justifyContent: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            <Col lg={12} style={{ marginTop: 0 }}>
              <div className="AIMG">
                {" "}
                <Image
                  src="/images/Arya/A-2.jpg"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </Col>
            <Col lg={12} style={{ marginTop: 20 }}>
              <div className="AIMG">
                {" "}
                <Image
                  src="/images/Arya/A-3.jpg"
                  width={400}
                  height={400}
                ></Image>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Arya;
