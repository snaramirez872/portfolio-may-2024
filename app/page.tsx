import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from '../public/icons/profile.png';
import email from '../public/icons/envelope.svg';
import github from '../public/icons/github-mark-white.png';
import linkedin from '../public/icons/In-White-96@2x.png';
import x from '../public/icons/x-logo-white.png';
import "./components/About.css";


export default function Home() {
  return (
    <main>
      <section className="About-Me">
        <div id='about-content' className='pl-5'>
          <div className='words'>
            <p>I am a <span className='text-[22px] font-semibold text-orange-500'>Software Developer</span> who recently graduated from the New Jersey Institute of Technology. My focuses lie primarily in <span className='text-[22px] font-semibold text-orange-500'>Web Development</span> and general <span className='text-[22px] font-semibold text-orange-500'>Front End Development/Design</span>. As such, I am proficient in <span className='text-[22px] font-semibold text-orange-500'>JavaScript</span> and <span className='text-[22px] font-semibold text-orange-500'>Python</span>.</p>
            <p className='mt-6'>When I am not coding, I enjoy playing video games, photography, listening to music, and anime.</p>
            <p className='mt-6'>I've been making <span className='text-[22px] font-semibold text-orange-500'>React.js</span> applications for several months now and they all can be viewed by <span className='hidden md:inline'>clicking "Projects" at the top right</span><span className='inline md:hidden'>tapping "Projects" below</span>.</p>
          </div>
          <div className='profile-card'>
            <Image className='profile-picture' src={ProfilePic} alt="profile picture" />
            <div className='flex gap-8 mt-5'>
              <Link href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><Image className='icon' src={email} alt="email" /></Link>
              <Link href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><Image className='icon' src={github} alt="github" /></Link>
              <Link href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={linkedin} alt="linkedin" /></Link>
              <Link href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={x} alt="x" /></Link>
            </div>
          </div>
        </div>
      </section>
      <div className='mobile-tabs'>
        <Link href='/projects' className="">Projects</Link>
        <Link href='#' className="">Resume</Link>
      </div>
      <div id='link-icons' className='md:hidden ml-[7vh] pl-5 flex gap-[6vh]'>
          <Link href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><Image className='icon' src={email} alt="email" /></Link>
          <Link href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><Image className='icon' src={github} alt="github" /></Link>
          <Link href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={linkedin} alt="linkedin" /></Link>
          <Link href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={x} alt="x" /></Link>
        </div>
    </main>
  );
}
