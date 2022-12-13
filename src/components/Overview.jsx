import React from "react";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import youtube from "../assets/icon-youtube.svg";
import up from "../assets/icon-up.svg";
import down from "../assets/icon-down.svg";
import CountUp from "react-countup";

const Overview = () => {
    return (
        <section>
            <h2 className='text-start text-2xl md:text-3xl font-bold text-main-text dark:text-light-white mb-10 xs:text-center md:text-left'>Overview - Today</h2>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Page Views</p>
                        <img src={facebook} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={87} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={up} alt="" className="w-3" />
                            <p className='text-main-green font-bold'>&nbsp;3%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Likes</p>
                        <img src={facebook} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={52} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={down} alt="" className="w-3" />
                            <p className='text-main-red font-bold'>&nbsp;2%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Likes</p>
                        <img src={instagram} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={5462} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={up} alt="" className="w-3" />
                            <p className='text-main-green font-bold'>&nbsp;2257%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Profile Views</p>
                        <img src={instagram} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={52} duration={5} />k</h3>
                        <span className='flex items-center justify-center'>
                            <img src={up} alt="" className="w-3" />
                            <p className='text-main-green font-bold'>&nbsp;1375%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Retweets</p>
                        <img src={twitter} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={117} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={up} alt="" className="w-3" />
                            <p className='text-main-green font-bold'>&nbsp;303%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Likes</p>
                        <img src={twitter} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={507} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={up} alt="" className="w-3" />
                            <p className='text-main-green font-bold'>&nbsp;553%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Likes</p>
                        <img src={youtube} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={107} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={down} alt="" className="w-3" />
                            <p className='text-main-red font-bold'>&nbsp;19%</p>
                        </span>
                    </div>
                </div>

                <div className='bg-light-lightCardBg dark:bg-dark-darkCardBg p-5 rounded-lg shadow shadow-dark-darkTopBg dark:shadow-light-lightTopBg hover:bg-light-hoverCardBg hover:dark:bg-dark-hoverCardBg transition-all hover:scale-[1.1]'>
                    <div className='flex justify-between'>
                        <p className='text-main-text font-[700]'>Total Views</p>
                        <img src={youtube} alt="social-icon" className="w-7"/>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-3xl font-[700] text-light-blackText dark:text-dark-white'><CountUp end={1407} duration={5} /></h3>
                        <span className='flex items-center justify-center'>
                            <img src={down} alt="" className="w-3" />
                            <p className='text-main-red font-bold'>&nbsp;12%</p>
                        </span>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Overview