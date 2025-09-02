"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className=''>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-white to-orange-700">
                        Hello, I'm{" "} 
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Bárbara',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Biomedical Engineer',
                        1000,
                        'Software Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Just a girl trying to be the difference that the world needs.
                </p>
                <div>
                    <Link 
                        href="/#projects"
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white'>
                            Projects
                    </Link>
                    <a 
                        href="/files/cv_master.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                            CV
                    </a>
                </div>
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/Avatar.png"
                        alt='hero image'
                        className = 'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;