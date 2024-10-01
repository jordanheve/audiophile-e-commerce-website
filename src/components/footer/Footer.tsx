import headerLogo from "/logo.svg";
import FacebookLogo  from "../../assets/icon-facebook.svg?react";
import TwitterLogo from "../../assets/icon-twitter.svg?react";
import InstagramLogo from "../../assets/icon-instagram.svg?react";

import CategoryLinks from "../header/CategoryLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950   text-center text-sm mt-28 ">
      <div className="max-w-[1110px] grid grid-cols-1 gap-8 mx-auto relative max-lg:px-6 py-8 lg:grid-cols-2 lg:gap-y-4 lg:items-start">
        <div className="absolute top-0 left-1/2 transform max-lg:-translate-x-1/2 w-[6rem] h-1 bg-custom-orange lg:left-0"></div>

        {/* Columna izquierda */}
        <div className="flex flex-col items-center lg:items-start lg:col-span-1">
          <img src={headerLogo} alt="audiophile" />
          <p className="text-zinc-400 mt-6 lg:mt-4 lg:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span className="text-zinc-500 font-semibold mt-4 lg:mt-10">
            Copyright {currentYear}. All Rights Reserved
          </span>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col items-center lg:items-end lg:col-span-1">
          <CategoryLinks />
          <div className="flex items-center gap-4 mt-6 lg:mt-12">
            <FacebookLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
            <TwitterLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
            <InstagramLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
          </div>
        </div>
      </div>
    </footer>
  );
}
