     
     import React from "react";
     import { Row, Col, Button} from "reactstrap";
     import { Collapse } from "antd";
import Link from "next/link";

     const InfoA = () => {
       return (
         <div>
           <Row
             style={{
               justifyContent: "center",
               alignContent: "center",

               paddingTop: 100,
               marginBottom: 50,
             }}
           >
             <div
               className="a-box"
               style={{
                 margin: "auto",

                 borderRadius: 15,
                 marginBottom: 50,
               }}
             >
               <Col lg={12}>
                 <Col span={10} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{}}> Creation</h3>
                     <div>
                       <p style={{}}>
                         The legacy art world has over looked talented artists
                         due to nepotism and backroom deals.
                       </p>
                     </div>
                   </div>
                 </Col>
                 <Col span={5} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{}}> Action</h3>
                     <div>
                       <p style={{}}>
                         EVO-DAO empowers individual 1/1 Artists through a
                         democratic artist accelerator.
                       </p>
                     </div>
                   </div>
                 </Col>
                 <Col span={5} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{}}> Application</h3>

                     <div>
                       <p style={{}}>
                         Standout from the crowd with democratically determined
                         talent.
                       </p>
                     </div>
                   </div>
                 </Col>
               </Col>
             </div>

             <div
               className="info-box"
               style={{
                 margin: "auto",
                 borderRadius: 15,
                 marginBottom: 50,
               }}
             >
               <Col lg={12} style={{ padding: 10 }}>
                 <Col span={10} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{ color: "transparent" }}> Creation</h3>
                     <div>
                       <p style={{ color: "transparent" }}>
                         The legacy art world has over looked talented artists
                         due to nepotism and backroom deals.
                       </p>
                     </div>
                   </div>
                 </Col>
                 <Col span={5} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{ color: "transparent" }}> Action</h3>
                     <div>
                       <p style={{ color: "transparent" }}>
                         EVO-DAO empowers individual 1/1 Artists through a
                         democratic artist accelerator.
                       </p>
                     </div>
                   </div>
                 </Col>
                 <Col span={5} style={{ margin: 50 }}>
                   <div style={{ margin: "auto", maxWidth: 400 }}>
                     <h3 style={{ color: "transparent" }}> Application</h3>

                     <div>
                       <p style={{ color: "transparent" }}>
                         Standout from the crowd with democratically determined
                         talent.
                       </p>
                     </div>
                   </div>
                 </Col>
               </Col>
             </div>
           </Row>
           <Row
             style={{
               justifyContent: "center",
               alignContent: "center",

               marginBottom: 50,
             }}
           >
             <Link href="/Misc/101">
               <Button
                 className="hero-btn"
                 style={{ marginTop: 10, fontWeight: 500 }}
               >
                 Crypto 101
               </Button>
             </Link>
           </Row>
         </div>
       );
     };
     export default InfoA;