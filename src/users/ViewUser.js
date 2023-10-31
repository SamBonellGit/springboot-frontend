import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <Container>
      <Row>
        <Col md-6 offset-md-3 border rounded p-4 mt-2 shadow variant="dark">
          <h2 className="text-center mb-4 mt-4 text-white-colour">User Details</h2>

          <Card bg="dark" text="white">
            <Card.Header>
              Details of user id : {user.id}
            </Card.Header>
            <ListGroup bg="dark" text="white" >
              <ListGroup.Item bg="dark" text="white"><b>Name:</b> {user.name}</ListGroup.Item>
              <ListGroup.Item><b>UserName:</b> {user.username}</ListGroup.Item>
              <ListGroup.Item><b>Email:</b> {user.email}</ListGroup.Item>
            </ListGroup>
          </Card>
          <Link to={"/"}>
            <Button  className="my-2 custom-button">
              Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
