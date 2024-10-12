import headerLogo from "/logo.svg";
import FacebookLogo from "../../assets/icon-facebook.svg?react";
import TwitterLogo from "../../assets/icon-twitter.svg?react";
import InstagramLogo from "../../assets/icon-instagram.svg?react";
import { Link } from "react-router-dom";
import CategoryLinks from "../header/CategoryLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 text-center text-sm">
      <div className="max-w-[1110px] flex flex-col gap-8 mx-auto relative max-lg:px-6 py-8 md:gap-y-4 md:items-start">
        <div className="absolute top-0 left-1/2 transform max-md:-translate-x-1/2 w-[6rem]  h-1 bg-custom-orange md:left-6 lg:left-0"></div>
        {/* Columna izquierda */}
        <div className="flex flex-col gap-3 items-center w-full">
          <div className="flex justify-between w-full flex-col gap-6 lg:flex-row">
            <div className="max-md:mx-auto">
              <Link to="/" >
                <img src={headerLogo} alt="audiophile" title="Audiophile Home Page"/>
              </Link>
            </div>
            <CategoryLinks />
          </div>
          <div className="lg:flex gap-24 lg:gap-96 lg:items-center w-full lg:justify-between">
            <div className="flex flex-col">
              <p className="text-zinc-400 mt-6 md:mt-4 md:text-left ">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <br />
              <span className="text-zinc-500 font-semibold mt-4 md:mt-10 md:text-left max-lg:hidden">
                Copyright {currentYear}. All Rights Reserved
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between md:items-end lg:items-center">
              <span className="text-zinc-500 font-semibold mt-4 md:mt-10 md:text-left lg:hidden">
                Copyright {currentYear}. All Rights Reserved
              </span>
              <div className="flex items-center gap-4 mt-6 lg:mt-0">
                <FacebookLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
                <TwitterLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
                <InstagramLogo className="cursor-pointer fill-white hover:fill-custom-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
