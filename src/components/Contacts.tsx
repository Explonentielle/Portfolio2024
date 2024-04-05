"use client"

import React from "react";
import Referral from "./Referral";
import { useHeaderContext } from '../Context';
import { FaDownload } from "react-icons/fa";
import { TextGenerateEffect } from "./text-generate-effect";
import ReferralSumary from "./ReferralSumary";

const Contacts = () => {
  const { showScrollDown } = useHeaderContext();
  const words = `Young full-stack developer, I am enthusiastic about developing engaging and user-friendly web and mobile applications. Currently seeking an internship or my first professional opportunity, I offer a unique combination of creativity and technical skills.`;

  function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
  }
  const comments = [
    { id: 1, text: "Working with ALexandre has been a pleasure - their attention to detail and collaborative spirit truly shine. ALexandre brings great value to any project.", rating: 5, timestamp: "2024-02-28T10:30:00Z", name: "Malik - Uguest" },
    { id: 1, text: "I highly recommend Alexandre for their outstanding professionalism and dedication!", rating: 5, timestamp: "2024-03-02T10:30:00Z", name: " ATelier S41" },
  ];

  return (
    <section id="contact" className="p-12 px-4">
      <div >

        <h1 className="aboutTitle ml-32 mb-5 text-5xl text-white font-bold mb-4">About Me</h1>

        <div className="mx-auto flex flex-row justify-between">

          <div className="w-full md:w-1/2">
            <TextGenerateEffectDemo />
            <h3 className="text-white  mt-24 ">Available Now</h3>
            <h3 className="text-xl underline text-white font-bold">Alex59debonnieres@gmail.com</h3>
          </div>


          <div className="w-full md:w-1/2 ">

            <div className="w-full px-4">
              <ReferralSumary comments={comments} background="bg-card" />
            </div>

            <a href="/path/to/your/cv.pdf" download className="bg-submit text-white m-4 py-2 px-4 rounded-md inline-flex items-center">
              Download CV <FaDownload className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      {!showScrollDown && <Referral />}
    </section>
  );
};

export default Contacts;

