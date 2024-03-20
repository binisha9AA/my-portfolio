'use client';
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import { IoBookSharp } from 'react-icons/io5';
import { GiGraduateCap } from 'react-icons/gi';

export const AboutSection = () => {
  return (
    <section className="py-6 lg:py-10">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        <div className="flex-grow">
          <Image
            src="/images/laptop.svg"
            alt="about me image"
            width={300}
            height={300}
            className="w-full h-full object-center "
          />
        </div>
        <div className="space-y-7 max-w-[unset] md:max-w-[300px] lg:max-w-[520px]">
          <div className="flex flex-col gap-1">
            <h3 className=" text-white mb-4 sm:text-3xl text-2xl lg:text-4xl font-bold">
              About Me
            </h3>
            <p className="text-[#ADB7BE]">
              I am a Front-end Developer with 1 year of professional experience.
              I bring a comprehensive skill set in HTML5, CSS and ReactJS. From
              WordPress to Modern Web applications. I can build pixel-perfect
              websites using Sass & Tailwind CSS along with React frameworks
              like RemixJS.
            </p>
          </div>
          <Tabs.Root className="flex flex-col " defaultValue="tab1">
            <Tabs.List
              className="shrink-0 flex "
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="bg-slate-950 px-4 py-3 h-[45px] flex items-left justify-start text-[15px] text-grey-500 text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-white data-[state=active]:border-b-4 border-[#4281f1] text-[#ADB7BE] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:bottom-border-tabs data-[state=active]:focus:red outline-none cursor-default font-semibold"
                value="tab1"
              >
                Skills
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-slate-950 px-4 py-3 h-[45px] flex items-left justify-start text-[15px] text-grey-500 text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-white data-[state=active]:border-b-4 border-[#4281f1] text-[#ADB7BE] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:bottom-border-tabs data-[state=active]:focus:red outline-none cursor-default font-semibold"
                value="tab2"
              >
                Education
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow py-3 bg-slate-950 rounded-b-md outline-none px-4 text-white"
              value="tab1"
            >
              <ul className="list-disc">
                <li>HTML and CSS</li>
                <li>JavaScript and TypeScript</li>
                <li>React JS and Remix JS</li>
                <li>Tailwind CSS and SASS</li>
                <li>Figma and Adobe</li>
              </ul>
            </Tabs.Content>

            <Tabs.Content
              className="grow py-3 bg-slate-950 rounded-b-md outline-none px-4 text-white"
              value="tab2"
            >
              <ul className="flex flex-col gap-5">
                <li className="flex gap-3">
                  <span className="rounded-[50%] border border-[#ADB7BE] flex justify-center items-center w-8 h-8  ">
                    {' '}
                    <GiGraduateCap />
                  </span>
                  <div>
                    <p className="capitalise">
                      Bachelor In Information Management
                    </p>
                    <p className="capitalise text-[#ADB7BE]">
                      St.xavier&apos;s college,maitighar
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="rounded-[50%] border border-[#ADB7BE] flex justify-center items-center  w-8 h-8 ">
                    {' '}
                    <IoBookSharp />
                  </span>
                  <div>
                    <p className="capitalise">Specialised in Busines studies</p>
                    <p className="capitalise text-[#ADB7BE]">
                      Prasadi academy, tafalhon
                    </p>
                  </div>
                </li>
              </ul>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

// color for tabs
// #4281f1
