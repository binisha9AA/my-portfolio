import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 md:gap-10">
      <div className="text-white ">
        <h3 className="text-5xl font-bold mb-3">Let&apos;s Connect</h3>
        <article className="text-[#ADB7BE] mb-8">
          <p>Exploring new opportunities with an open inbox policy!</p>
          <p>
            Whether you have a question or simply want to say hi, I&apos;m all
            ears.{' '}
          </p>{' '}
          <p>If you enjoyed my portfolio, feel free to reach out!</p>{' '}
          <p>Here&apos;s how to contact me. </p>
        </article>
        <div className="space-y-1 mb-5">
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline className="h-6 w-6" />
            <h4 className="font-semibold uppercase">Email</h4>
          </div>
          <p className="text-[#ADB7BE]">binishabajracharya708@gmail.com</p>
        </div>
        <div className="space-y-2">
          <h4 className=" text-[20px] font-medium uppercase">Social Media</h4>
          <div className="flex gap-3 items-center">
            <Link href="/">
              <IoLogoGithub className="h-6 w-6" />
            </Link>

            <Link href="/">
              <FaLinkedin className="h-6 w-6 " />
            </Link>
          </div>
        </div>
      </div>
      <form className="flex flex-col ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block  text-sm font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your Name"
            className="bg-slate-800 border-[#33353f] placeholder-[#9CA2A9] outline-none text-white indent-1 text-sm rounded-lg block w-full p-3"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Your Email"
            className="bg-slate-800 border-[#33353f] placeholder-[#9CA2A9] outline-none text-white indent-1 text-sm rounded-lg block w-full p-3"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm font-medium mb-2"
          >
            Your Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            placeholder="Your subject"
            className="bg-slate-800 border-[#33353f] placeholder-[#9CA2A9] outline-none text-white indent-1 text-sm rounded-lg block w-full p-3"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-slate-800 border-[#33353f] placeholder-[#9CA2A9] outline-none text-white indent-1 text-sm rounded-lg block w-full p-3 resize-none"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-[#6e1546] hover:bg-gradient-to-r hover:from-green-800 hover:to-purple-700 text-white font-medium py-3 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
