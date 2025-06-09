import React from "react";
import { Row, Col, Input, Button } from "antd";

const Footer = () => (
  <div style={{ backgroundColor: "#f0f2f5", padding: "40px 50px" }}>
    <Row gutter={32}>
      <Col xs={24} md={6}>
        <h3>Tro Nhanh</h3>
        <p>Contact number: 02033074477</p>
      </Col>
      <Col xs={24} md={6}>
        <h4>Company</h4>
        <p>Home</p>
        <p>About us</p>
        <p>Our team</p>
      </Col>
      <Col xs={24} md={6}>
        <h4>Guests</h4>
        <p>Blog</p>
        <p>FAQ</p>
        <p>Career</p>
      </Col>
      <Col xs={24} md={6}>
        <h4>Stay up to date</h4>
        <p>Be the first to know about our newest apartments</p>
        <Input placeholder="Email address" style={{ marginBottom: 8 }} />
        <Button type="primary">Subscribe</Button>
      </Col>
    </Row>
    <div style={{ textAlign: "center", marginTop: 40 }}>
      &copy; 2025 Tro Nhanh
    </div>
  </div>
);

export default Footer;
