import React, { useState, Row, Col, NavLink } from 'react';
import { Menu, Dropdown } from "antd";
import Link from "next/link";


import Image from "next/image";




const menu = (

  <Menu className="a-box" style={{ marginTop: -40, marginLeft: 65 }}>
    <Menu.Item key="0">
      <a rel="noopener noreferrer" href="/">
        Home
      </a>
    </Menu.Item>

    <Menu.Item key="1">
      <a rel="noopener noreferrer" href="/Misc/Marketplaces">
        Marketplaces
      </a>
    </Menu.Item>

    <Menu.Item key="2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.thegoldenframe.xyz/"
      >
        Competition
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a rel="noopener noreferrer" href="/Misc/FAQ">
        FAQ
      </a>
    </Menu.Item>
  </Menu>
);







const Header = () => {

  return (
    <div className="box">
      <header tabindex="0">
    
          EVO <Image src="/images/Icons/evo.png" width={50} height={50} /> DAO
     
   
      </header>

      <div id="nav-container">
        <div class="bg"></div>
        <div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li style={{ marginBottom: 20 }}>
              <a href="/">HOME</a>
            </li>
            <li style={{ marginBottom: 20 }}>
              <a href="/Misc/FAQ">about</a>
            </li>
            <li style={{ marginBottom: 20 }}>
              <a href="/Misc/Artists">Artists</a>
            </li>
            <li style={{ marginBottom: 20 }}>
              <a href="/Misc/Members">Members</a>
            </li>
            <li style={{ marginBottom: 20 }}>
              <a href="/Misc/101">Crypto 101</a>
            </li>
            <li style={{ marginBottom: 20 }}></li>
            <li class="small">
              <a href="https://twitter.com/EVODAOnft">
                {" "}
                <img
                  src="/images/Icons/twitter.png"
                  className="icon"
                  style={{ height: 25, justifyContent: "center" }}
                />{" "}
              </a>

              <a href="https://discord.gg/Ptc9gMpVNn">
                {" "}
                <img
                  src="/images/Icons/discord.png"
                  className="icon"
                  style={{ height: 25, justifyContent: "center" }}
                />{" "}
              </a>

              <a href="https://www.instagram.com/evo.dao/?hl=en">
                {" "}
                <img
                  src="/images/Icons/medium.png"
                  className="icon"
                  style={{ height: 28, justifyContent: "center" }}
                />{" "}
              </a>

              <a href="https://www.instagram.com/evo.dao/?hl=en">
                {" "}
                <img
                  src="/images/Icons/instagram.png"
                  className="icon"
                  style={{ height: 28, justifyContent: "center" }}
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
};

export default Header;

