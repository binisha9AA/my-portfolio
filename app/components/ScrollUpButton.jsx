'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  return (
    <div
      className="bg-[#6e1546] w-8 h-8 rounded-[50%] flex items-center justify-center absolute bottom-4 right-4"
      onClick={scrollToTop}
    >
      <FaArrowUp className="fill-white" />
    </div>
  );
};

export default ScrollUpButton;
