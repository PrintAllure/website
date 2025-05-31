import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Product Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "The custom phone stands were perfect for our corporate event. Excellent quality and fast turnaround!",
    },
    {
      name: "Raj P.",
      role: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Love my custom plant pots! The attention to detail is amazing. Will definitely order again.",
    },
    {
      name: "Emily T.",
      role: "Office Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "Our branded desk organizers arrived right on time and look even better than expected. Highly recommend!",
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-base-300"}`} 
      />
    ));
  };

  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          What Our Customers Say
        </h2>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="carousel w-full space-x-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                id={`testimonial-${index}`}
                className={`carousel-item relative w-full md:w-1/2 lg:w-1/3 ${
                  index === activeIndex ? "block" : "hidden md:block"
                }`}
              >
                <div className="card bg-base-100 border border-base-300 rounded-box p-6 h-full transform transition-all hover:shadow-lg hover:border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base-content">{testimonial.name}</h3>
                      <p className="text-sm text-base-content/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-base-content/90 italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-base-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;