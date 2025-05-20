import React, { lazy, Suspense } from 'react';
const TestimonialCarousel = lazy(() => import('../../components/TestimonialCarousel/TestimonialCarousel'));

const Testimonials: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading testimonials...</div>}>
      <TestimonialCarousel />
    </Suspense>
  );
};

export default Testimonials;
