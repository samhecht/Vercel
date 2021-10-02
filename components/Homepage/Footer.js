

import React from 'react';
import { Col } from 'reactstrap';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Button,
} from "reactstrap";
import Link from "next/link";

const Footer = () => {
    return (
      <div>
        <div style={{ backgroundColor: "#F5F5F5", maxHeight: 1000 }}>
          <Row
            style={{
              justifyContent: "center",
              margin: "auto",
              alignContent: "center",
              textAlign: "center",
              paddingTop: 50,
            }}
          >
            <Col sm={24} lg={6}>
              <p> Interested in becoming an EVO-Artist?</p>
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <Button
                  className="btn-box1"
                  style={{ fontWeight: 500, marginTop: 30, marginBottom: 50 }}
                >
                  Contact
                </Button>
              </Link>
            </Col>
            <Col sm={24} lg={6}>
              <p> Interested in joining EVO-DAO?</p>
              <Link href="https://twitter.com/EVODAOnft">
                <Button
                  className="btn-box1"
                  style={{ fontWeight: 500, marginTop: 30, marginBottom: 50 }}
                >
                  Follow
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );

}
export default Footer;
