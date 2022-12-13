import React from "react";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import youtube from "../assets/icon-youtube.svg";
import up from "../assets/icon-up.svg";
import down from "../assets/icon-down.svg";
import CountUp from "react-countup";

const Followers = () => {
  return (
    <section className="py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg border-t-[4px] border-main-faceBook  transition-all hover:scale-[1.1]">
        <div className="flex justify-center gap-4 mb-4">
          <img src={facebook} alt="social-icon" className="w-7"/>
          <p className="text-main-text font-bold">@nathanf</p>
        </div>
        <h2 className="text-6xl text-center text-light-blackText dark:text-dark-white font-[700]">
          <CountUp end={1987} duration={5} />
        </h2>
        <p className="text-center text-main-text uppercase tracking-[3px]">
          Followers
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <img src={up} alt="" className="w-3" />
          <p className="text-main-green font-bold">12 Today</p>
        </div>
      </article>

      <article className="bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg border-t-[4px] border-main-twitter transition-all hover:scale-[1.1]">
        <div className="flex justify-center gap-4 mb-4">
          <img src={twitter} alt="social-icon" className="w-7"/>
          <p className="text-main-text font-bold">@nathanf</p>
        </div>
        <h2 className="text-6xl text-center text-light-blackText dark:text-dark-white font-[700]">
          <CountUp end={1044} duration={5} />
        </h2>
        <p className="text-center text-main-text uppercase tracking-[3px]">
          Followers
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <img src={up} alt="" className="w-3" />
          <p className="text-main-green font-bold">99 Today</p>
        </div>
      </article>

      <div className="bordertest">
      <article className="bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg border-t-[4px] instagram transition-all hover:scale-[1.1]">
        <div className="flex justify-center gap-4 mb-4">
          <img src={instagram} alt="social-icon" className="w-7"/>
          <p className="text-main-text font-bold">@realnathanf</p>
        </div>
        <h2 className="text-6xl text-center text-light-blackText dark:text-dark-white font-[700]">
          <CountUp end={11} duration={5} />k
        </h2>
        <p className="text-center text-main-text uppercase tracking-[3px]">
          Followers
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <img src={up} alt="" className="w-3" />
          <p className="text-main-green font-bold">1099 Today</p>
        </div>
      </article>
      </div>

      <article className="bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg border-t-[4px] border-main-youTube transition-all hover:scale-[1.1]">
        <div className="flex justify-center gap-4 mb-4">
          <img src={youtube} alt="social-icon" className="w-7"/>
          <p className="text-main-text font-bold">Nathan F.</p>
        </div>
        <h2 className="text-6xl text-center text-light-blackText dark:text-dark-white font-[700]">
          <CountUp end={8239} duration={5} />
        </h2>
        <p className="text-center text-main-text uppercase tracking-[3px]">
          Subscribers
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <img src={down} alt="" className="w-3" />
          <p className="text-main-red font-bold">144 Today</p>
        </div>
      </article>
    </section>
  );
};

export default Followers;
