import React from 'react';

const Hero = () => {
  return (
    <header className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]!</h1>
      <p className="text-xl mb-8">
        A Data Engineer at Sigmoid | Passionate about building scalable data solutions.
      </p>
      <a
        href="#about"
        className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-200"
      >
        Learn More
      </a>
    </header>
  );
};

export default Hero;