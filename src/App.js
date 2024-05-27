import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import { getReviews, addReview } from './ReviewService'; // Mock service for local testing
import { Container, Button } from 'react-bootstrap';
import HeroSection from './components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css'; // Default Bootstrap CSS
import './styles/custom.css';  // Custom CSS that overrides Bootstrap


function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const data = await getReviews();
    setReviews(data);
  };

  const handleAddReview = (review) => {
    setReviews((prevReviews) => [review, ...prevReviews]);
  };

  return (
    <Router>
      <div className="App">
        {/* <h1 className="my-4">Book Review App</h1> */}
        
        <Routes>
          <Route path="/submit-review" element={<ReviewForm onAddReview={handleAddReview} />} />
          <Route
            path="/"
            element={
              <>
                <HeroSection></HeroSection>
                <ReviewList reviews={reviews} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
