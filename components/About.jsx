import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I&apos;m fresh graduate with a passion for web development, I eager to apply my skills and knowledge to make a positive impact in the industry.
          I am committed to building intuitive and user-friendly websites that meet the needs of clients and end-users alike.
          I thrive in dynamic and fast- paced environments and am always looking for new challenges to help me grow both personally and professionally.
          I am a quick learner, an effective communicator, and a team player, with a dedication to delivering quality work under tight deadlines.
          I am excited to be part of a team that values innovation, creativity, and excellence, and I am eager to contribute my skills to help achieve our shared goals
          </p>
          <Link href='/#projects'>
            <button className='px-8 mr-8 py-2 mt-4 flex:auto'>
              Check out some of my latest projects 👌
            </button>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
