import React from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Image from "next/image";



const Dizzy = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Row
          style={{
            justifyContent: "right",
            margin: "auto",
            alignContent: "right",
            paddingTop: 100,
          }}
        >
          <Col lg={5} style={{ marginTop: 150 }}>
            <Link href="/Arya">
              <Button className="btn-box1" style={{ fontWeight: 500 }}>
                Prev
              </Button>
            </Link>

            <Link href="/Kyule">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Next
              </Button>
            </Link>
            <div
        
              style={{
                marginTop: 20,
                marginBottom: 20,
                width: 360,
                margin: 50
              }}
            >
              <h1
                style={{
                  fontSize: 50,
                  fontWeight: 600,
                }}
              >
                DizzyJay{" "}
              </h1>
              <h5 style={{ marginBottom: 10 }}>
                Dizzy is a Canadian artist, he blends his love for color and
                pixels into a unique assortment of pieces. Inspired by the great
                outdoors and the emerging vision of the metaverse, his art lies
                there, just beyond.
              </h5>
            </div>
            <Link href="/Members">
              <Button className="btn-box1" style={{ fontWeight: 500 }}>
                Digital Eyes
              </Button>
            </Link>
            <Link href="/Members">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Magic Eden
              </Button>
            </Link>
            <Link href="/Members">
              <Button
                className="btn-box1"
                style={{ fontWeight: 500, marginLeft: 25 }}
              >
                Metaplex
              </Button>
            </Link>
          </Col>

          <Col
            span={12}
            style={{
              justifyContent: "right",
              margin: "auto",
              alignContent: "right",
            }}
          >
            <Col lg={12} style={{ marginTop: 0 }}>
 
                <div className="AIMG">
                  {" "}
                  <Image
                    src="/images/DizzyJay/D-1.jpg"
     
                    width={500}
                    height={500}
                  ></Image>
 
              </div>
            </Col>

            <Col lg={12} style={{ marginTop: 20 }}>
 
                <div className="AIMG">
                  {" "}
                  <Image
                    src="/images/DizzyJay/D-2.jpg"
       
                    width={500}
                    height={500}
                  ></Image>
        
              </div>
            </Col>
          </Col>

          <Col
            span={24}
            style={{
              justifyContent: "center",
              margin: "auto",
              alignContent: "center",
            }}
          >
            <Col lg={12} style={{ marginTop: 0 }}>
    
                <div className="AIMG">
                  {" "}
                  <Image
                    src="/images/DizzyJay/D-3.jpg"
           
                    width={500}
                    height={500}
                  ></Image>
         
              </div>
            </Col>
            <Col lg={12} style={{ marginTop: 20 }}>
        
                <div className="AIMG">
                  {" "}
                  <Image
                    src="/images/DizzyJay/D-4.jpg"
            
                    width={500}
                    height={500}
                  ></Image>
      
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Dizzy;

