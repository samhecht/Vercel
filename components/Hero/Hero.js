import React from "react";
import { Col } from "reactstrap";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Button,
  Row,
} from "reactstrap";
import Link from "next/link";
import { BsFilter } from "react-icons/bs";
import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
const HeroV = () => {

  return (
    <div style={{ backgroundColor: "white", paddingTop: 0 }}>
      <Row>
        <Col>
          <div style={{ padding: 0, paddingTop: 200 }}>
            <h1 className="HeroT" style={{ paddingTop: 20 }}>
              {" "}
              Find the Next Great Talent
            </h1>
            <Search
              placeholder="Search for Artwork, Artist or Style.."
              allowClear
              className="HeroV"
              onSearch={onSearch}
              style={{
                width: 300,
                backgroundColor: "white",
                color: "black",
                marginTop: 40,
                marginBottom: 150,
              }}
            />
          </div>
        </Col>
        <Col>
        <img src='/images/Background/Featured.jpg' style={{padding:50}}/>
        </Col>
      </Row>
    </div>
  );
};
export default HeroV;
