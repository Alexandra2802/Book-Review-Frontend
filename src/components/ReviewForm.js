import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import StarRating from "./StarRating";
import "../styles/ReviewForm.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Default Bootstrap CSS
import "../styles/custom.css"; // Custom CSS that overrides Bootstrap

function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

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
    setSuccess(true);

    // Reset form fields
    setTitle("");
    setAuthor("");
    setReviewText("");
    setRating(0);
    setImage(null);
    // setSuccessMessage("");
  };

  return (
    <Container className="my-4 form-cantainer">
      <Row>
        <Col>
          <h1 className="submit-review-title">Write a Book Review</h1>
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

            {/* <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                required
              />
            </Form.Group> */}
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <StarRating onRatingChange={setRating} />
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

            {success && (
              <Alert variant="success" className="mt-3">
                Review submitted successfully!
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewForm;
