import React from "react";
import { Container, Button, Col, Row, NavLink } from "reactstrap";
import Link from "next/link";
import { Menu, Dropdown, Card } from "antd";

const Header = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <Row>
        <div className="headergal">
          <img
            className="logo"
            src="/images/Background/logo.png"
            style={{
              width: 130,
              justifyContent: "left",
              alignContent: "center",

              textAlign: "left",
            }}
          ></img>
   
          <div className='dashboard'>
            <div className='board'>
              <a href="#"> Artworks</a>
            </div>
               <div className='board'> 
              <a href="#">Artists</a>
            </div>
               <div className='board'>
              <a href="#">Statistics</a>
            </div>
       
          </div>
          <nav>
            <Link href="/SubmitArtPage">
              <button className="connect">
                <img src="/images/Icons/twitter.png" width={20} height={20} />
              </button>
            </Link>
          </nav>
        </div>
      </Row>
    </div>
  );
};
export default Header;
