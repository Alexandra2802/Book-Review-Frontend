import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Default Bootstrap CSS
import '../styles/custom.css'; // Custom CSS that overrides Bootstrap


function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !reviewText || !rating || !image) {
      alert("All fields are required.");
      return;
    }

    const review = {
      title,
      author,
      reviewText,
      rating,
      cover: URL.createObjectURL(image),
    };

    onAddReview(review);

    // Show success message
    setSuccessMessage("Review submitted successfully!");

    // Reset form fields after a short delay
    setTimeout(() => {
      setTitle("");
      setAuthor("");
      setReviewText("");
      setRating("");
      setImage(null);
      setSuccessMessage("");
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h2>Write a Book Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formReviewText">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Form.Group>

            <div class="d-flex justify-content-between mt-3">
              <Button variant="primary" type="submit">
                Submit Review
              </Button>
              <Button variant="secondary" as={Link} to="/">
                Back to Main Page
              </Button>
            </div>

            {successMessage && (
              <div className="mt-3">
                <Alert variant="success">{successMessage}</Alert>
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewForm;
