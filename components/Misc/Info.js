     
     import React from "react";
     import { Row, Col, Button} from "reactstrap";
     import { Collapse } from "antd";
import Link from "next/link";

     const InfoA = () => {
       return (
         <div>
           <div
             className="backd1"
             style={{ height: 400, justifyContent: "center" }}
           >
             {" "}
             <Row
               style={{
                 justifyContent: "center",
                 margin: "auto",
                 alignContent: "center",
                 textAlign: "center",

                 paddingTop: 50,
          
                 maxWidth: 1200,
               }}
             >
               <h1
                 style={{
                   fontSize: 50,
                   fontWeight: 700,
                   color: "white",
                
                   marginTop: 100,
                 }}
               >
                 Breaking the Mold{" "}
               </h1>

               <Link href="/Misc/101">
                 <Button
                   className="hero-btn"
                   style={{
                     marginLeft: 0,
                     marginTop: 50,
                     fontWeight: 500,
                     width: 150,
                   }}
                 >
                   Crypto 101
                 </Button>
               </Link>
             </Row>
           </div>

           <div style={{ background: "white" }}>
             <Row
               style={{
                 justifyContent: "center",
                 alignContent: "center",
                 margin: "auto",
                 paddingTop: 100,
                 marginBottom: 50,
                 maxWidth: 1200,
               }}
             >
               <Col span={3} style={{ margin: 50 }}>
                 <div className="a-box">
                   <div style={{ margin: "auto", maxWidth: 300 }}>
                     <h3 style={{ fontWeight: 600 }}> Creation</h3>
                     <div
                       className="m-text"
                       style={{
                         textAlign: "left",
                         marginTop: 10,
                         marginBottom: 10,
                         width: 110,
                       }}
                     ></div>
                     <div>
                       <p style={{}}>
                         The legacy art world has over looked talented artists
                         due to nepotism and backroom deals.
                       </p>
                     </div>
                   </div>
                 </div>
               </Col>
               <Col span={3} style={{ margin: 50 }}>
                 <div className="a-box">
                   <div style={{ margin: "auto", maxWidth: 300 }}>
                     <h3 style={{ fontWeight: 600 }}> Action</h3>
                     <div
                       className="m-text"
                       style={{
                         textAlign: "left",
                         marginTop: 10,
                         marginBottom: 10,
                         width: 85,
                       }}
                     ></div>
                     <div>
                       <p style={{}}>
                         EVO-DAO empowers individual 1/1 Artists through a
                         democratic artist accelerator.
                       </p>
                     </div>
                   </div>
                 </div>
               </Col>
               <Col span={3} style={{ margin: 50 }}>
                 <div className="a-box">
                   <div style={{ margin: "auto", maxWidth: 300 }}>
                     <h3 style={{ fontWeight: 600 }}> Application</h3>
                     <div
                       className="m-text"
                       style={{
                         textAlign: "left",
                         marginTop: 10,
                         marginBottom: 10,
                         width: 150,
                       }}
                     ></div>
                     <div>
                       <p>
                         EVO-DAO's democratic screening process allows artists differentiate themselves from other creators.
                       </p>
                     </div>
                   </div>
                 </div>
               </Col>
             </Row>
           </div>
         </div>
       );
     };
     export default InfoA;
