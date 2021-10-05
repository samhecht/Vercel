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
          maxHeight: 1000,
          paddingBottom: 260,
          paddingTop: 100,
          scrollPaddingBottom: 300,
        }}
      >
        <Container>
          <Row
            style={{
              justifyContent: "left",
              margin: "auto",
              alignContent: "left",
              paddingTop: 50,
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
                  Supporting Talented Artists{" "}
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

                    marginBottom: 50,
                    marginRight: 10,
                  }}
                >
                  About
                </Button>
              </Link>

              <Link href="/Misc/Artists">
                <Button
                  className="hero-btn"
                  style={{
                    fontWeight: 600,

                    marginLeft: 20,
                    marginBottom: 50,
                  }}
                >
                  Collections
                </Button>
              </Link>
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              height: 5,
            }}
          >
            <Col span={24}>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Hero;

