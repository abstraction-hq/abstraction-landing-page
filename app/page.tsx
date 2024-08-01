"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-conic text-white">
      <nav className="flex items-center justify-between p-6 shadow-md">
        <img src="/assets/icon.png" alt="Logo" className="h-8 w-auto" />
        <div className="space-x-10">
          <a
            href="https://docs.abstraction.world"
            className="hover:text-gray-300"
            target="_blank"
          >
            Docs
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>

      <section className="flex flex-grow items-center justify-center p-10">
        <div className="text-center">
          <TypeAnimation
            className="text-7xl font-bold mb-4 text-green-500"
            sequence={[
              "Abstraction Wallet",
              1500,
              "Abstraction Application",
              1500,
              "Abstraction World",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="text-xl text-gray-600 italic">
            We create innovative smart wallets for the blockchain technology
          </p>
          <p className="text-xl text-gray-600 italic">
            Simplify your digital assets with ease and security
          </p>
          <button className="mt-6 px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            <a
              href="https://wallet.abstraction.world"
              className="hover:text-gray-300"
              target="_blank"
            >
              Open Wallet
            </a>
          </button>
        </div>
      </section>

      <footer className="p-6 text-center">
        <p>© 2024 Abstraction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
