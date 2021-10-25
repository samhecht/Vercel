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
  Row,} from "reactstrap";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const LikeButton = () => {
  return <div>
      < AiFillHeart className='LikeButton'/>
  </div>
};
export default LikeButton;
