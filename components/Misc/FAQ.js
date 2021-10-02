import React from 'react';
import {  Row, Col, Button } from 'reactstrap';
import { Collapse } from "antd";


const { Panel } = Collapse;

const FAQ = () => {

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
            <Panel header="artist commonly asked questions?" key="1">
              <p>why</p>
            </Panel>
            <Panel header="etc?" key="2">
              <p>
                process
              </p>
            </Panel>
            <Panel header="etc?" key="3">
              <p>
                general 5%
              </p>
            </Panel>
            <Panel header="etc " key="4">
              <p>benefits</p>
            </Panel>
            <Panel header="etc?" key="5">
              <p>
                benefits
              </p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}

export default FAQ;



