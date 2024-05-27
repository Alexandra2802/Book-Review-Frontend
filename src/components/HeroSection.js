import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./HeroSection.css"; // Assuming you create a separate CSS file for custom styles

function HeroSection() {
  return (
    <Row className="align-items-center hero-section">
      <Col md={8} sm={12}>
        <h1>Welcome to BookLovers</h1>
        <p className="my-4">
          Dive into the world of books and share your experiences with fellow
          book enthusiasts.
        </p>
        <Button
          variant="primary btn-lg"
          as={Link}
          to="/submit-review"
          className="mb-4"
        >
          Write a Review
        </Button>
      </Col>
      <Col md={4} sm={12} className="text-center">
        <img
          src="https://www.pngplay.com/wp-content/uploads/4/Book-Free-PNG.png"
          alt="Books"
          className="img-fluid"
        />
      </Col>
    </Row>
  );
}

export default HeroSection;
