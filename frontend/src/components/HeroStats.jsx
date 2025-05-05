
import CountUp from 'react-countup';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroStats = () => {
    useGSAP(() => {
        gsap.from('.stats', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        });
    });
  return (

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="stats">
            <h3 className="text-2xl font-bold text-secondary ">
              <CountUp end={4000} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-300">Satisfied Customers</p>
          </div>
          <div className="stats">
            <h3 className="text-2xl font-bold text-secondary ">
              <CountUp end={2000} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-300">Products Sold</p>
          </div>
          <div className="stats">
            <h3 className="text-2xl font-bold text-secondary ">
              <CountUp end={500} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-300">Positive Reviews</p>
          </div>
          <div className="stats">
            <h3 className="text-2xl font-bold text-secondary ">
              <CountUp end={50} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-300">Team Members</p>
          </div>
        </div>
      </div>
  );
};

export default HeroStats;
