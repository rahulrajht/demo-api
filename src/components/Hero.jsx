import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import networkingTeam from '../assets/networkingTeam.svg'
function Hero() {
  return (
    <Container  className="hero-container" fluid>
      <Row className="text-center mt-5">
        <Col lg={6} md={8} xs={12}  className="text-col mt-5">
          <h3>API Partner Network</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil libero debitis magni corporis, iusto quam hic numquam! Pariatur nihil officiis sunt quod iusto omnis est, quasi velit possimus odit, dignissimos repellendus nisi debitis iure totam vero modi, fugit placeat quisquam.
          </p>
          <Button variant="outline-success">Click Here to Explore</Button>
        </Col>
        <Col className="text-col">
          <Image fluid src={networkingTeam}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
