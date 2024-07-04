import headerLogo from "/logo.svg";
import facebookLogo from "/assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "/assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "/assets/shared/desktop/icon-instagram.svg";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 px-6 py-8 flex items-center flex-col gap-8 text-center text-sm mt-28">
       <img src={headerLogo} alt="audiophile" />

       <ul className="uppercase text-zinc-100  font-semibold flex flex-col gap-3">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
       </ul>

       <p className="text-zinc-400 ">
       Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
       </p>

       <span className="text-zinc-500 font-semibold">
        Copyright {currentYear}. All Rights Reserved
       </span>

       <div className="flex gap-4">
        <img src={facebookLogo} alt="facebook logo" />
        <img src={twitterLogo} alt="twitter logo" />
        <img src={instagramLogo} alt="instagram logo" />
       </div>
    </footer>
  )
}
