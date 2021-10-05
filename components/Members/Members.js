import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";
import Link from "next/link";
import { Menu, Dropdown, Space } from "antd";
import Image from "next/image";
import { Collapse } from "antd";
import { Group, Compass, System, Login, Action } from "grommet-icons";
const { Panel } = Collapse;

const Members = () => {
  return (
    <div style={{ maxHeight: 3000 }}>
      <div className="backd1" style={{ maxHeight: 400 }}>
        <Row
          style={{
            justifyContent: "left",
            margin: "auto",
            alignContent: "center",
            textAlign: "left",
            paddingTop: 50,
            paddingBottom: 10,
            maxWidth: 1200,
          }}
        >
          <h1
            style={{
              fontSize: 50,
              fontWeight: 700,
              color: "white",
              marginBottom: 10,
              marginTop: 100,
            }}
          >
            EVO-DAO Members{" "}
          </h1>
          <h5 style={{ color: "white", marginTop: 20, fontWeight: 400 }}>
            Improving Solana's Art Qaulity
          </h5>
        </Row>
        <div style={{ backgroundColor: "white ", paddingBottom: 25, paddingTop: 25}}>
          <Row
            style={{
              justifyContent: "center",
              margin: "auto",
              marginTop: 100,
              alignContent: "cennter",
              marginBottom: 100,
              maxWidth: 1200,
            }}
          >
            <Col
              lg={6}
              style={{
                paddingTop: 50,
                marginTop: 0,
                marginBottom: 0,
                color: "white",
              }}
            >
              <div className="a-box">
                <Row>
                  <Col lg={6}>
                    <h3
                      style={{ textAlign: "left", margin: 10, fontWeight: 600 }}
                    >
                      Vote
                    </h3>
                    <div
                      className="m-text"
                      style={{ textAlign: "left", margin: 10 }}
                    ></div>
                    <p style={{}}>
                      {" "}
                      EVO-DAO Members vote on adding Artists, Governance, and
                      Art Competitions.
                    </p>
                  </Col>

                  <Col
                    lg={3}
                    style={{ alignContent: "center", margin: "auto" }}
                  >
                    <div
                      className="m-box"
                      style={{
                        textAlign: "center",
                        width: 80,
                        height: 80,
                        margin: "auto",
                      }}
                    >
                      <Group
                        color="white"
                        style={{ width: 40, height: 40, marginTop: 10 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} style={{ marginTop: 50 }}>
              <div className="a-box">
                <Row>
                  <Col lg={6}>
                    <h3
                      style={{ textAlign: "left", margin: 10, fontWeight: 600 }}
                    >
                      {" "}
                      Direction
                    </h3>
                    <div
                      className="m-text1"
                      style={{ textAlign: "left", margin: 10 }}
                    ></div>
                    <p style={{}}>
                      {" "}
                      EVO-DAO's Lightweight democratic governance navigates
                      saturated NFT markets.
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    style={{ alignContent: "center", margin: "auto" }}
                  >
                    <div
                      className="m-box"
                      style={{
                        textAlign: "center",
                        width: 80,
                        height: 80,
                        margin: "auto",
                      }}
                    >
                      <Compass
                        color="white"
                        style={{ width: 40, height: 40, marginTop: 10 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col
              lg={6}
              style={{ paddingTop: 50, marginTop: 0, color: "white" }}
            >
              <div className="a-box">
                <Row>
                  <Col lg={6}>
                    <h3
                      style={{ textAlign: "left", margin: 10, fontWeight: 600 }}
                    >
                      Access
                    </h3>
                    <div
                      className="m-text2"
                      style={{ textAlign: "left", margin: 10 }}
                    ></div>
                    <p style={{ color: "black" }}>
                      {" "}
                      The Competition Frame Gallery is avaible before general
                      release to help you find talent.{" "}
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    style={{ alignContent: "center", margin: "auto" }}
                  >
                    <div
                      className="m-box"
                      style={{
                        textAlign: "center",
                        width: 80,
                        height: 80,
                        margin: "auto",
                      }}
                    >
                      <Action
                        color="white"
                        style={{ width: 40, height: 40, marginTop: 10 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6} style={{ marginTop: 50 }}>
              <div className="a-box">
                <Row>
                  <Col lg={6}>
                    <h3
                      style={{ textAlign: "left", margin: 10, fontWeight: 600 }}
                    >
                      Utility
                    </h3>
                    <div
                      className="m-text3"
                      style={{ textAlign: "left", margin: 10 }}
                    ></div>
                    <p>
                      {" "}
                      The EVO-DAO Treasury fund takes a 5% fee on all EVO-Artist
                      artwork listings.{" "}
                    </p>
                  </Col>

                  <Col
                    lg={6}
                    style={{ alignContent: "center", margin: "auto" }}
                  >
                    <div
                      className="m-box"
                      style={{
                        textAlign: "center",
                        width: 80,
                        height: 80,
                        margin: "auto",
                      }}
                    >
                      <System
                        color="white"
                        style={{ width: 40, height: 40, marginTop: 10 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Members;
