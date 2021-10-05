import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";
import Link from "next/link";
import { Menu, Dropdown, Space } from "antd";
import Image from "next/image";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MembersHome = () => {
  return (
    <div style={{ maxHeight: 3000 }}>
      <div className="backd1" style={{ maxHeight: 600 }}>
        <Row
          style={{
            justifyContent: "left",
            margin: "auto",
            alignContent: "left",
            textAlign: "left",
            paddingTop: 50,
            paddingBottom: 10,
            maxWidth: 1000,
          }}
        >
          <div
            className="a-box-h"
            style={{
              width: 370,
              height: 370,
              padding: 30,
              marginTop: 50,
            }}
          >
            <h5 style={{ color: "white", marginBottom: 10 }}>
              EVO-NFT Holders
            </h5>
            <h1
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: "white",
                marginBottom: 10,
              }}
            >
              Members{" "}
            </h1>

            <ul style={{ color: "white", marginTop: 50 }}>
              <li style={{ color: "white", marginTop: 20 }}>
                {" "}
                Onboarding Artists to Solana
              </li>
              <li style={{ color: "white", marginTop: 20 }}>
                Governing Democratically
              </li>

              <li style={{ color: "white", marginTop: 20 }}>
                Unique Utility
              </li>
            </ul>
            <Link href="/Misc/Members">
              <Button
                className="hero-btn"
                style={{ fontWeight: 500, marginTop: 20, marginBottom: 50 }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default MembersHome;

