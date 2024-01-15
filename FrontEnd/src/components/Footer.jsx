import React from 'react'
import {Logo, Fb, Insta, Twitter, LinkedIn, Googlestore, Applestore } from "./Icons";

const Footer = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-3/4 text-center sm:flex justify-between py-8 px-0">
        <div className="flex flex-col gap-16">
          <div>
            <Logo />
          </div>
          <div className="flex gap-6">
            <div>
              <Fb />
            </div>
            <div>
              <Insta />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="flex gap-12 text-gray-500">
          <div className="flex flex-col gap-2 items-start">
            <p>About Us</p>
            <p>Sitemap</p>
            <p>Credits</p>
            <p>Help Center</p>
            <p>Community Guidilines</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p>Accessibility</p>
            <p>Mobile</p>
            <p>Marketing</p>
            <p>Advertising</p>
            <p>Report Issue</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Trust & Safety</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <Googlestore />
          <Applestore />
        </div>
      </div>
    </div>
  );
}

export default Footer