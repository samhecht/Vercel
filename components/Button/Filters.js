import React from "react";
import { Col, Button } from "reactstrap";
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
} from "reactstrap";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { Menu, Dropdown, Space } from "antd";
const Popular = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        First - Last
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Last - First
      </a>
    </Menu.Item>
  </Menu>
);

const Date = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Newest - Oldest
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Oldest - Newest
      </a>
    </Menu.Item>
  </Menu>
);


const FiltersButton = () => {
  return (
    <div>
      <Dropdown overlay={Date} placement="bottomCenter">
        <Button className="filters">Date</Button>
      </Dropdown>

      <Dropdown overlay={Popular} placement="bottomCenter">
        <Button className="filters">Popular</Button>
      </Dropdown>
    </div>
  );
};
export default FiltersButton;
