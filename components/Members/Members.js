import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";
import Link from "next/link";
import { Menu, Dropdown, Space } from "antd";
import Image from "next/image";
import { Collapse } from "antd";

const { Panel } = Collapse;




const Members = () => {

  return (
    <div style={{ maxHeight: 3000 }}>
      <div className="backd1" style={{ maxHeight: 500 }}>
        <Row
          style={{
            justifyContent: "left",
            margin: "auto",
            alignContent: "center",
            textAlign: "left",
            paddingTop: 50,
            paddingBottom: 10,
            maxWidth: 1000,
          }}
        >
          <div
            className="a-box-h"
            style={{
              maxWidth: 570,
              height: 370,
              padding: 30,
              marginTop: 100,
            }}
          >
            <h1
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: "white",
                marginBottom: 10,
              }}
            >
              EVO-DAO Members{" "}
            </h1>
            <h5 style={{ color: "white", marginTop: 20, fontWeight: 400 }}>
              Improving Solana's Art Qaulity
            </h5>
            <ul style={{ color: "white", marginTop: 50 }}>
              <li style={{ color: "white", marginTop: 20 }}> </li>
              <li style={{ color: "white", marginTop: 20 }}></li>
            </ul>
          </div>
        </Row>
      </div>

      <div
        style={{ maxHeight: 3000, backgroundColor: "white", paddingBottom: 50 }}
      >
        <Row
          style={{
            justifyContent: "center",
            margin: "auto",
            alignContent: "cennter",
          }}
        >
          <Col lg={2} style={{ paddingTop: 50, marginTop: 0, color: "white" }}>
            <h3 style={{ textAlign: "left", margin: 10 }}>Vote</h3>
            <div className="a-box">
              <p style={{}}>
                {" "}
                EVO-DAO Members vote on adding Artists, Governance, and Art
                Competitions.
              </p>
            </div>
          </Col>
          <Col lg={2} style={{ marginTop: 50 }}>
            <h3 style={{ textAlign: "left", margin: 10 }}> Direction</h3>
            <div className="a-box">
              <p style={{}}>
                {" "}
                EVO-DAO's Lightweight democratic governance navigates saturated
                NFT markets.
              </p>
            </div>
          </Col>

          <Col lg={2} style={{ marginTop: 50 }}>
            <h3 style={{ textAlign: "left", margin: 10 }}>Utility</h3>
            <div className="a-box">
              <p>
                {" "}
                The EVO-DAO Treasury fund takes a 5% fee on all EVO-Artist
                artwork listings.{" "}
              </p>
            </div>
          </Col>

          <Col lg={2} style={{ paddingTop: 50, marginTop: 0 }}>
            <h3 style={{ textAlign: "left", margin: 10 }}>Access</h3>
            <div className="a-box">
              <p style={{ color: "black" }}>
                {" "}
                The Competition Frame Gallery is avaible before general release
                to help you find talent.{" "}
              </p>
              <p> </p>
            </div>
          </Col>

          <Col lg={2} style={{ paddingTop: 50, marginTop: 0 }}>
            <h3 style={{ textAlign: "left", margin: 10 }}>Action</h3>
            <div className="a-box">
              <p style={{}}>
                {" "}
                Members recieve half the DAO fee if your selected candiate
                becomes an EVO Artist.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Members;
