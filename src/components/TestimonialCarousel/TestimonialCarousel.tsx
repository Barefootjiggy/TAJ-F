import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './TestimonialCarousel.css';

const testimonials = [
  { name: "Jon", text: "I think I look good in clothing and thank you for that. All of this possible because of you", image: "/images/JonTest.webp" },
  { name: "Mattie Jo", text: "Working with amanda is great because I always know she has my holistic health at heart. She cares about helping me achieve my goals for longevity and sustainability, not just for the sake of “reaching” them (at whatever cost: mental health, burnout, over restricting etc..). I also love that she’s going to be honest with me about what I need to adjust!", image: "/images/MJCTest.webp" },
  { name: "Cassondra", text: "(My success) is 100% credit to her program + guidance", image: "/images/CassTest.webp" },
  { name: "Katie", text: "Thank you so much for being so passionate about what you do and being real!! I love your whole approach to this lifestyle…And the mindset aspect of the whole thing was priceless I’m very thankful for that!!!", image: "/images/KatieTest.webp" },
  { name: "Dana", text: "I think the most important thing I learned from this program is not to judge myself and to be kinder to myself in every way… I feel great! Physically I am down a little over 10lbs but that wasn’t my main goal! I feel healthier and in a better place to tackle life long goals.", image: "/images/DanaTest.webp" },
  { name: "Kayla", text: "It was something that just became a part of my routine. I did it for me. And I’m dang proud.", image: "/images/KaylaTest.webp" },
  { name: "Jordan", text: "Thanks to this program I’ve been able to realize what should and shouldn’t be going into my body.", image: "/images/JordanTest.webp" },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="container fade-in">
      <h2 className="testimonial-title">What Clients Are Saying</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <div className="testimonial-content">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                  loading="lazy"
                />
                <div className="testimonial-text-container">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h3 className="testimonial-name">- {testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <button
          className="embla__button embla__button--prev"
          onClick={scrollPrev}
          disabled={!prevEnabled}
        >
          ‹
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={scrollNext}
          disabled={!nextEnabled}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
