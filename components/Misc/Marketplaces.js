import React from 'react';
import {Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";


const Marketplaces = () => {
        return (
          <div className="back">
            <Row
              style={{
                alignItems: "center",
                justifyContent: "center",
                marign: "auto",
                paddingTop: 200,
              }}
            >
              <Col
                sm={24}
                lg={3}
                style={{ alignContent: "center", justifyContent: "center" }}
              >
                <div style={{ marginBottom: 50 }}>
                  <div className="a-box">
                    <div>
                      <h2>Digital Eyes</h2>

                      <p>Digital Eyes Bio</p>
                    </div>
                    <Image
                      src="/images/Aa.jpg"
                      className="AIMG"
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                </div>
                <div
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <a href="https://www.evo-dao.xyz/">
                    <Button className="btn" href="/Artist">
                       Collections
                    </Button>
                  </a>
                </div>
              </Col>

              <Col sm={24} lg={3} style={{ marginTop: 0 }}>
                <div style={{ marginBottom: 50 }}>
                  <div className="a-box">
                    <div>
                      <h2>Magic Eden</h2>

                      <p>Magic Eden Bio</p>
                    </div>
                    <Image
                      src="/images/Aa.jpg"
                      className="AIMG"
                      width={300}
                      height={300}
                    ></Image>
                  </div>
                </div>
                <div
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <a href="https://www.evo-dao.xyz/">
                    <Button className="btn" href="/Artist">
                      Collections
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        );
}
export default Marketplaces;

