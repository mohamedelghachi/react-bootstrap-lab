import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //modifier submitted en true
    setSubmitted(true);
  };

  return (
    <div>
      <Form style={{ maxWidth: "400px", margin: "0 auto" }} onSubmit={handleSubmit} >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {submitted && (
        <Alert variant="success" className="mt-3">
          Bienvenue, {name}! Votre compte a été créé avec l’adresse email{" "}
          {email}.
        </Alert>
      )}
    </div>
  );
}
export default SignUpForm;
