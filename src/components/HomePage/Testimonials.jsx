import React from 'react';
import male from '../../assets/profile.png';
import female from '../../assets/woman.png';


const Testimonials = () => {
  const testimonials = [
    {
      quote: "I bought a catch tray to manage my jewellery and it is great and the paint quality is good too.",
      name: "Jessica Martinez",
      handle: "",
      avatar: female
    },
    {
      quote: "I ordered a mini gun and it looks quite real. No one can tell the difference. The quality of the product is also fabulous.",
      name: "Karanveer Singh Sra",
      handle: "",
      avatar: male
    },
    {
      quote: "I got miniatures from them of my parents. Those miniatures were very detailed and affordable too while having superior quality and were tough.",
      name: "Himmath",
      handle: "",
      avatar: male
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-purple-600 font-medium mb-4">Testimonials</h3>
          <h2 className="text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
            We have served many amazing people
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-gray-800 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}'s avatar`} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;