'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section className="lg:py-10">
      <div className="grid grid-cols 1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-bold">
            <span
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-blue-500 to-red-400"
            >
              Hello,I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Binisha', 1000, 'Web Developer']}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            fugiat?
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 border-none font-semibold w-full sm:w-fit bg-white text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full mr-4 text-white w-full sm:w-fit border border-white mt-3">
              <span className="block bg-slate-950 hover:bg-slate-800 rounded-full px-5">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 hidden sm:flex"
        >
          <div className="rounded-full bg-[#6e1546] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[50%] w-[170px] h-[170px] lg:w-[unset] lg:h-[unset] "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
