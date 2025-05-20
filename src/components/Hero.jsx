import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <div id="home" className='bg-gradient-to-b from-black via-gray-900 to-black text-white text-center py-16'>
      <img 
        src={HeroImage} 
        alt="Profile" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover
        transform transition-transform duration-500 hover:scale-110
        hover:rotate-x-6 hover:rotate-y-6 shadow-[0_25px_50px_rgba(0,0,0,0.5)]
        '
        style={{ perspective: '800px' }}
      />
      
      <h1 className='text-4xl font-bold drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Ruthrapathi Murugan
        </span>
        , Full-Stack Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300 max-w-xl mx-auto drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]'>
        I specialize in building modern and responsive web applications.
      </p>

      <div className='mt-8 space-x-4'>
        <a
          href="#contact"
          className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 hover:translate-y-1
          px-5 py-3 rounded-full shadow-lg'
        >
          Contact With Me
        </a>

        <a
          href="/assets/Ruthrapathi Murugan-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 hover:translate-y-1
            px-5 py-3 rounded-full shadow-lg'>
            Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero;
