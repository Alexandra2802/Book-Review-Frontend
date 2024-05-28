import React from 'react';
import { Container } from 'react-bootstrap';
import ReviewCard from './ReviewCard'; // Make sure to import the ReviewCard component
import '../styles/ReviewList.css'

const ReviewList = ({ reviews }) => {
  return (
    <Container>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <p>No reviews yet!</p>
      )}
    </Container>
  );
};

export default ReviewList;
