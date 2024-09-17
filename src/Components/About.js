import React from "react";
import Logo from "./Images/Logo.png";

const AboutHbtc = () => {
  return (
    <div className="bg-black min-h-screen text-white px-8 py-12 md:pt-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
        {/* Left Section - Text */}
        <div className="flex-1 flex flex-col justify-center pr-4 sm:pr-8 pl-4 sm:pl-7 mb-8 sm:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-yellow-400">$HBTC</span>
          </h1>
          <p className="text-lg mb-8">
            Step into the future of decentralized finance with Harvest BTC
            (HBTC), where every stake is a step toward growing your wealth.
            Designed for the modern crypto farmer, HBTC offers a seamless blend
            of staking rewards, direct income, and multiple earning
            opportunities. Whether you're a seasoned trader or new to the crypto
            space, HBTC provides a robust platform for multiplying your assets
            and achieving financial freedom. Backed by the security and speed of
            Binance Smart Chain (BSC), Harvest BTC is your gateway to the next
            level of digital farming.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={Logo}
            alt="HBTC logo"
            className="md:w-60 md:h-60 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHbtc;
