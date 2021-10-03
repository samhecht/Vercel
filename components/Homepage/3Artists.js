import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

const Artists = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5", maxHeight: 3000 }}>
      <Row
        style={{
          justifyContent: "center",
          margin: "auto",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: 50,
            fontSize: 50,
            fontWeight: 600,
            marginTop: 150,
            color: "black",
          }}
        >
          NFT Artists{" "}
        </h1>
        <h5
          style={{
            marginBottom: 20,
          }}
        >
          Explore Each Artist's Background
        </h5>
        <h5 style={{ marginBottom: 0 }}>Find Your Style</h5>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          margin: "auto",

          textAlign: "center",
        }}
      >
        <Link href="/Arya">
          <Col sm={24} lg={2} style={{ marginTop: 50 }}>
            <div className="AIMG1">
              <Image
                src="/images/Profile/Ab.jpg"
                className="AIMG"
                width={500}
                height={500}
              ></Image>
            </div>
          </Col>
        </Link>

        <Link href="/Vibe">
          <Col sm={24} lg={2} style={{ marginTop: 50 }}>
            <div className="AIMG1">
              <Image
                src="/images/Profile/Aa.jpg"
                className="AIMG"
                width={500}
                height={500}
              ></Image>
            </div>
          </Col>
        </Link>

        <Link href="/DizzyJay">
          <Col sm={24} lg={2} style={{ marginTop: 50 }}>
            <div className="AIMG1">
              <Image
                src="/images/Profile/Ae.jpg"
                className="AIMG"
                width={500}
                height={500}
              ></Image>
            </div>
          </Col>
        </Link>

        <Link href="/Z1M">
          <Col sm={24} lg={2} style={{ marginTop: 50 }}>
            <div className="AIMG1">
              <Image
                src="/images/Profile/Ac.jpg"
                className="AIMG"
                width={500}
                height={500}
              ></Image>
            </div>
          </Col>
        </Link>

        <Link href="/Kyule">
          <Col sm={24} lg={2} style={{ marginTop: 50, marginBottom: 250 }}>
            <div className="AIMG1">
              <Image
                src="/images/Profile/Ad.jpg"
                className="AIMG"
                width={500}
                height={500}
              ></Image>
            </div>
          </Col>
        </Link>
      </Row>
  
    </div>
  );
};
export default Artists;
