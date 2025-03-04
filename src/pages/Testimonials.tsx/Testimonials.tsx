import React from 'react';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel'
import './Testimonials.css'; // Optional styling

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-page">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <TestimonialCarousel />
    </div>
  );
};

export default Testimonials;
