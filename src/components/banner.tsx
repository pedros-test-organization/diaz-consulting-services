import React from 'react'
import background from 'src/assets/abstract.jpg'

const Banner = () => {
  return (
    <div className="relative h-64 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={background} // Replace with your image URL
        alt="Banner Background"
        className="absolute inset-0 object-cover w-full h-full"
        draggable="false"
      />
      
      {/* Banner Content */}
      <div className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-white mt-2">This is a simple banner using Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Banner