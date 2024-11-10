import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import InfoCard from "./InfoCard";
import SignUpForm from "./SignUpForm";
import myImage_1 from "./images/bicycle.jpg"; // Import de l'image locale
import myImage_2 from "./images/bicycle2.jpg"; // Import de l'image locale
import myImage_3 from "./images/traveler.jpg"; // Import de l'image locale
import UserTable from "./components/UserTable";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-4">
        <Row>
          <Col>
            <InfoCard img={myImage_1} />
          </Col>
          <Col>
            <InfoCard img={myImage_2} />
          </Col>
          <Col>
            <InfoCard img={myImage_3} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <SignUpForm />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <UserTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;
