import React from 'react';
import { Container, Button, Col, Row, NavLink} from "reactstrap";
import Link from 'next/link'
import Image from "next/image";
import  { useState} from "react";
import { Menu, Dropdown, Space } from "antd";







const Hero = () => {

  return (
    <div>
      <div
        className="info"
        style={{
          maxHeight: 850,
          paddingBottom: 100,
          paddingTop: 20,
        }}
      >
        <Container>
          <Row
            style={{
              justifyContent: "left",
              margin: "auto",
              alignContent: "left",
              paddingTop: 100,
              textAlign: "left",
              maxWidth: 1000,
            }}
          >
            <Col lg={12}>
              <div style={{ marginTop: 150, marginBottom: 10 }}>
                <h1
                  style={{
                    color: "white",
                    marginBottom: 25,
                    fontSize: 50,
                    fontWeight: 700,
                  }}
                >
                  Bigger Than One Collection{" "}
                </h1>

                <h5 style={{ color: "white", marginBottom: 50 }}>
                  Bringing Artists and Collectors Together
                </h5>
              </div>

              <Link className="a-box" href="/Misc/FAQ">
                <Button
                  className="hero-btn"
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    marginBottom: 50,
                    marginRight: 10,
                  }}
                >
                  INFO
                </Button>
              </Link>

              <Link href="/Misc/Artists">
                <Button
                  className="hero-btn"
                  style={{
                    fontWeight: 600,
                    fontSize: 20,
                    marginLeft: 20,
                    marginBottom: 50,
                  }}
                >
                  NFTs
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
}
export default Hero;

