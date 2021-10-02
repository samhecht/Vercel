import React from 'react';
import {  Row, Col } from 'reactstrap';
import { Collapse } from "antd";

const { Panel } = Collapse;


const InfoM = () => {
  return (
    <div className="back">
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 0,
          paddingTop: 0,
          maxWidth: 1000,
          margin: "auto",
          maxHeight: 500,
        }}
      >
        <Col span={10} style={{ margin: 50 }}>
          <h1 style={{ color: "black", marginBottom: 50, fontSize: 40 }}>
            {" "}
            FAQ
          </h1>
          <Collapse accordion className="a-box">
            <Panel header="Who owns EVO-DAO?" key="1">
              <p>Holders of circulating EVO-NFTs.</p>
            </Panel>
            <Panel header="How many EVO-NFTs will there be?" key="2">
              <p>
                EVO-DAO consists of 500 EVO-NFTs, vested after each competition.
              </p>
            </Panel>
            <Panel header="What if I want to sell?" key="3">
              <p>
                All EVO-NFT holders can sell on the EVO-DAO secondary market,
                more options coming soon.
              </p>
            </Panel>
            <Panel header="What is the DAO's Utility " key="4">
              <p>EVO-NFT holders democratically allocate EVO-DAO revenue.</p>
            </Panel>
            <Panel header="How does EVO-DAO find Artists?" key="5">
              <p>
                To scout talent accross ecosystems, 20% of the EVO-NFT revenue
                will be used to fund art competitions.
              </p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
export default InfoM;
