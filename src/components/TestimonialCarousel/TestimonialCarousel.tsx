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
    image: "/JonTest.png" 
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
    name: "Katie", 
    text: "Thank you so much for being so passionate about what you do and being real!! I love your whole approach to this lifestyle…And the mindset aspect of the whole thing was priceless I’m very thankful for that!!!",
    image: "/KatieTest.png" 
  },
  { 
    name: "Dana", 
    text: "I think the most important thing I learned from this program is not to judge myself and to be kinder to myself in every way… I feel great! Physically I am down a little over 10lbs but that wasn’t my main goal! I feel healthier and in a better place to tackle life long goals",
    image: "/DanaTest.png"
  },
  { 
    name: "Kayla", 
    text: "It was something that just became a part of my routine. I did it for me. And I’m dang proud.",
    image: "/KaylaTest.png"
  },
  { 
    name: "Jordan", 
    text: "A year ago I fell into some really bad habits and they’ve been so hard to break. Thanks to this program I’ve been able to realize what should and shouldn’t be going into my body.",
    image: "/JordanTest.png"
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
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              
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
