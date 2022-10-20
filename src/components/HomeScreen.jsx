import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Product from "./Product"
import map from '../assets/map.svg'
import allData from '../assets/allData.svg'
import wallet from '../assets/wallet.svg'
function HomeScreen () {
    return (
        <Container className="home-container" fluid>
      <Row className="text-start">
        <Col md={6} lg={3} xl={3} xs={8}className="text-col mt-5">
            <h3>Build anything with our API Products </h3>
            <p>Our API Products let you use approved customer data to create or enhance your digital products.</p>
            <Button variant="outline-success">View all products</Button>
        </Col>
        <Col className='mt-5'><Product img={map} title="Address Overview"/></Col>
        <Col className='mt-5'><Product img={wallet} title="Wallet Transaction"/></Col>
        <Col className='mt-5'><Product img={allData} title="Analytics Overview"/></Col>
      </Row>
    </Container>
    )
}

export default HomeScreen