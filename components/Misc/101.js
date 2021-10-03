import React from "react";
import { Container, Row, Col, NavItem, NavLink } from "reactstrap";
import Image from "next/image";

const Inform = () => {
  return (
    <div style={{ height: 1000, backgroundColor: "white" }}>
      <Row
        style={{
          justifyContent: "center",
          margin: "auto",
          alignContent: "center",
          textAlign: "center",
          paddingTop: 50,
          paddingBottom: 10,
          maxWidth: 1200,
        }}
      >
        <Col sm={24} lg={6} style={{ margin: "auto", marginTop: 100 }}>
          <a href="https://solana.com/">
            <div className="a-box" style={{ height: 200 }}>
              <h3 style={{ marginBottom: 25 }}>Solana</h3>

              <div style={{ textAlign: "left" }}>
                <p>
                  Solana is the fastest blockchain in the world and the fastest
                  growing ecosystem in crypto, with over 400 projects spanning
                  DeFi, NFTs, Web3 and more.
                </p>
              </div>
            </div>
          </a>
        </Col>
        <Col sm={24} lg={6} style={{ margin: "auto", marginTop: 100 }}>
          <a href="https://phantom.app/">
            <div className="a-box" style={{ height: 200 }}>
              <h3 style={{ marginBottom: 25 }}> Phantom Wallet</h3>
              <div style={{ textAlign: "left" }}>
                <p>
                  Store and display NFTs on your Phantom Wallet, it takes 3
                  clicks to download. Remember to write down your recovery
                  phrase.{" "}
                </p>
              </div>
            </div>
          </a>
        </Col>
        <Col sm={24} lg={6} style={{ margin: "auto", marginTop: 100 }}>
          <a href="https://www.bbc.com/news/technology-56371912">
            <div className="a-box" style={{ height: 200 }}>
              <h3 style={{ marginBottom: 25 }}>NFT</h3>
              <div style={{ textAlign: "left" }}>
                <p>
                  NFT( Non fungible token) Are digital assets that are uniquely
                  identifiable and hold a specific value. This secure method of
                  storing/transfering value is revolutionizing the art world.{" "}
                </p>
              </div>
            </div>
          </a>
        </Col>
        <Col sm={24} lg={6} style={{ margin: "auto", marginTop: 100 }}>
          <a href="https://phantom.app/">
            <div className="a-box" style={{ height: 200 }}>
              <h3 style={{ marginBottom: 25 }}>DAO</h3>
              <div style={{ textAlign: "left" }}>
                <p>
                  A DAO (Decentralized Autonomous Organization) is like a small
                  nation state with a direct democracy. EVO-DAO has a flat
                  voting structure which means that everyone holding a
                  membership has an eqaul vote.{" "}
                </p>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default Inform;
