import React from "react";
import { Card, Button } from "react-bootstrap";
function InfoCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>React-Bootstrap Card</Card.Title>
        <Card.Text>
          This is an example of a simple card using React-Bootstrap.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
export default InfoCard;
