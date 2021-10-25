import React from "react";
import { Button, Row} from "reactstrap";
import { AiFillHeart } from "react-icons/ai";




const Button1 = () => {
  return (
    <div>
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Row>
          <Button className="marketplacebutton1">#style</Button>
          <Button className="marketplacebutton1">#style</Button>
          <Button className="marketplacebutton1">#style</Button>
          <Button className="marketplacebutton1">#style</Button>
          <Button className="marketplacebutton1">#style</Button>
          <Button className="marketplacebutton1">#style</Button>
        </Row>
      </div>
      <div style={{ width: "100%" }}>
        <Row>
          <Button className="marketplacebutton1">Profile</Button>
          <Button className="marketplacebutton1">Magic Eden</Button>
          <Button className="marketplacebutton1">Holaplex</Button>
        </Row>
      </div>
    </div>
  );
};
export default Button1;
