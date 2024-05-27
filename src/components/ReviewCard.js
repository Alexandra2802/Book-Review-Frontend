import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/ReviewCard.css'

const ReviewCard = ({ review }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col xs={2}>
            <img src={review.cover} alt="Book Cover" class="cover"  />
          </Col>
          <Col xs={10}>
            <h3>{review.title}</h3>
            <p>by {review.author}</p>
            <p>Rating: {review.rating}</p>
          </Col>
        </Row>
        <hr />
        <Card.Text>{review.reviewText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
