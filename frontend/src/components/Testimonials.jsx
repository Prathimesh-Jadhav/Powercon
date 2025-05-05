import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import testimonialsBg from '../assets/testimonials.jpg'; // Assuming you have a JSON file with testimonials data

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      position: "Production Manager",
      company: "Precision Manufacturing Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The CNC machine maintenance service has been exceptional. The team's attention to detail and quick response time has minimized our downtime and increased productivity by 30%. I highly recommend their services to any manufacturing facility.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Operations Director",
      company: "TechFab Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "After implementing their industrial automation solutions, our production efficiency improved dramatically. The custom system they designed perfectly addressed our unique manufacturing challenges. Their team's expertise is unmatched in the industry.",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Chief Engineer",
      company: "Advanced Robotics Ltd",
      image: "/api/placeholder/80/80",
      rating: 4,
      text: "We've been sourcing spare parts for our CNC machines for over 3 years now. The quality is consistently excellent, and their delivery times are reliable. What sets them apart is their technical support - always available to help with compatibility questions.",
    },
    {
      id: 4,
      name: "Lisa Rodriguez",
      position: "Plant Supervisor",
      company: "Global Metal Works",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The preventative maintenance program has been a game-changer for our facility. We've seen a significant reduction in unexpected breakdowns, and the detailed reports help us plan our maintenance budget more effectively. Excellent service all around.",
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-gray-300 py-16 text-roboto -z-20" id='testimonials'> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry professionals have to say about our services and products.
          </p>
        </div>

        <div className="relative">

          {/* Main testimonial card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
            <div className="absolute -z-10 opacity-60 top-0 left-0 right-0 bottom-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${testimonialsBg})` }}> 
            </div>
            <div className="absolute top-8 left-8 text-blue-500 opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic mb-8">
                "{testimonials[activeIndex].text}"
              </blockquote>

              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  <p className="text-blue-600 font-medium">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8">
            <button
              onClick={prevTestimonial}
              className="mx-2 bg-white text-gray-700 rounded-full p-2 shadow hover:shadow-md transition-shadow duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="mx-2 bg-white text-gray-700 rounded-full p-2 shadow hover:shadow-md transition-shadow duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Small testimonial cards for desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-10">
            {testimonials
              .filter((_, i) => i !== activeIndex)
              .slice(0, 3)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setActiveIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                >
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic line-clamp-3 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h5 className="font-medium text-gray-800">{testimonial.name}</h5>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}