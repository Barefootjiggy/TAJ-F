import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './TestimonialCarousel.css';

const testimonials = [
  { 
    name: "Jon", 
    text: "Lost 50lbs working with Amanda virtually",
    image: "/JonTest.png" // Update path to correct image location
  },
  { 
    name: "Mattie Jo", 
    text: "Working with Amanda is great because I always know she has my holistic health at heart...",
    image: "/MJCTest.png"
  },
  { 
    name: "Cassondra", 
    text: "(My success) is 100% credit to her program + guidance",
    image: "/CassTest.jpeg"
  },
  { 
    name: "Meghan", 
    text: "Amanda got me through some super self-critical moments...",
    image: "/images/meghan.jpg"
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Clients Are Saying</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoHeight={true}
        centeredSlides={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-content">
              {/* Left Side - Image */}
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              
              {/* Right Side - Text */}
              <div className="testimonial-text-container">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
