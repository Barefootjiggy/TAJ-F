import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const testimonials = [
  { name: "Jon", text: "Lost 50lbs working with Amanda virtually" },
  { name: "Mattie Jo", text: "Working with amanda is great because I always know she has my holistic health at heart. She cares about helping me achieve my goals for longevity and sustainability, not just for the sake of “reaching” them (at whatever cost: mental health, burnout, over restricting etc..). I also love that she’s going to be honest with me about what I need to adjust!" },
  { name: "Cassondra", text: "(my success) is 100% credit to her program + guidance" },
  { name: "Meghan", text: "Amanda got me through some super self-critical moments and always reminded me how far I’ve come… slow and steady is sustainable for a lifetime." },
  { name: "Tess", text: "I was afraid of my body. I was so afraid of hurting myself irreparably that I didn’t want to do anything. I was angry with my body… Working with you is not easy. I mean that positively. You actively made me question my motives, my habits, and my fears… you challenged me to reimagine my potential possibilities. I have genuinely never felt more in tune with my body." },
  { name: "Grace", text: "My mindset on health/food and moderation have completely changed. I am currently eating bread and going to enjoy dessert later too! BUT I also know I’ll be at the gym for leg day in a few hours 🙂 Enjoying life in moderation so I can have a longer life! Thank you so much for your patience and encouragement! I wouldn’t have made this progress without you." },
  { name: "Jeffry", text: "Thank you for being supportive and awesome. Very grateful for you." },
  { name: "Katie", text: "Thank you so much for being so passionate about what you do and being real!! I love your whole approach to this lifestyle…And the mindset aspect of the whole thing was priceless I’m very thankful for that!!!" },
  { name: "Misaki", text: "When I first started I was nervous about going to the gym or working out in general...I went from feeling like 5 LB was so heavy to being able to use 45LB for some exercises! The beautiful part is I never beat myself up when I had to take a break or felt pressured to reach a certain weight. THANK YOU AMANDA!!! I can’t believe how far I’ve come and how much more confident I am about my strength." },
  { name: "Dana", text: "I think the most important thing I learned from this program is not to judge myself and to be kinder to myself in every way… I feel great! Physically I am down a little over 10lbs but that wasn’t my main goal! I feel healthier and in a better place to tackle life long goals." },
  { name: "Mikayla", text: "Before doing this program, with a week like this, I would have not done any workout because I was ‘too busy’… The push and help from Amanda was just what I needed to get back on track! I now feel like I have the tools needed to live a healthy life!" },
  { name: "Kayla", text: "It was something that just became a part of my routine. I did it for me. And I’m dang proud." },
  { name: "Tammy", text: "This is new for me, and for 50+ years I didn’t pay attention to my habits…I thought about it for so long but didn’t actually commit to trying to make a change until I started your program… it was the right length of time for me to 1) establish new patterns and see enough of a difference to want to continue on, and 2) find what works for me to keep the momentum going." },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-lg mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <p className="text-lg italic">"{testimonial.text}"</p>
            <h3 className="mt-2 font-bold">- {testimonial.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
