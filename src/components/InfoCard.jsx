import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
function InfoCard(props) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>React-Bootstrap Card</Card.Title>
        {showDescription && (
          <Card.Text>
            Ceci est un exemple de carte avec une description visible lorsque
            vous cliquez sur "Voir plus".
          </Card.Text>
        )}
        <Button
          variant="primary"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Voir moins" : "Voir plus"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default InfoCard;
