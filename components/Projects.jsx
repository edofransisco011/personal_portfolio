import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import gymImg from '../public/assets/projects/gym.png';
import youtubeImg from '../public/assets/projects/youtube.png';
import sumzImg from '../public/assets/projects/sumz.png';
import dashboardImg from '../public/assets/projects/dashboard.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built Recently</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Gym App'
            backgroundImg={gymImg}
            projectUrl='/gym'
            tech='React JS'
          />
          <ProjectItem
            title='Youtube App'
            backgroundImg={youtubeImg}
            projectUrl='/youtube'
            tech='React JS'

          />
          <ProjectItem
            title='Summarize App'
            backgroundImg={sumzImg}
            projectUrl='/summarize'
            tech='React JS'

          />
          <ProjectItem
            title='Dashboard UI'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
