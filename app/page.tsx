import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from '../public/icons/profile.png';
import email from '../public/icons/envelope.svg';
import github from '../public/icons/github-mark-white.png';
import linkedin from '../public/icons/In-White-96@2x.png';
import instagram from '../public/icons/Instagram_Glyph_White.png';
import x from '../public/icons/x-logo-white.png';
import "./components/About.css";


export default function Home() {
  return (
    <main>
      <section className="About-Me">
        <div id='about-content'>
          <div className='words'>
            <p>I am a <span className='text-[22px] font-semibold text-orange-500'>Software Developer</span> who recently graduated from the New Jersey Institute of Technology. My focuses lie primarily in <span className='text-[22px] font-semibold text-orange-500'>Web Development</span> and general <span className='text-[22px] font-semibold text-orange-500'>Front End Development/Design</span>. As such, I am proficient in <span className='text-[22px] font-semibold text-orange-500'>JavaScript</span> and <span className='text-[22px] font-semibold text-orange-500'>Python</span>.</p>
            <p className='mt-6'>When I&apos;m not coding, I enjoy playing video games, photography, listening to music, and watching anime.</p>
            <p className='mt-6'>I&apos;ve been making <span className='text-[22px] font-semibold text-orange-500'>React.js</span> applications for several months now and they all can be viewed by <span className='hidden md:inline'>clicking &quot;Projects&quot; at the top right</span><span className='inline md:hidden'>tapping &quot;Projects&quot; below</span>.</p>
          </div>
          <div className='profile-card'>
            <Image className='profile-picture' src={ProfilePic} alt="profile picture" height={200} width={200} />
            <div className='flex gap-8 mt-5'>
              <Link href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><Image className='icon' src={email} alt="email" height={40} width={40} /></Link>
              <Link href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><Image className='icon' src={github} alt="github" height={40} width={40} /></Link>
              <Link href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={linkedin} alt="linkedin" height={40} width={40} /></Link>
              <Link href='https://instagram.com/seannybboy' target='_blank' rel='noreferrer'><Image className='icon' src={instagram} alt="instagram" height={40} width={40} /></Link>
              <Link href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={x} alt="x" height={40} width={40} /></Link>
            </div>
          </div>
        </div>
        <div className='mobile-tabs'>
          <Link href='/projects' className="">Projects</Link>
          <Link href='#' className="">Resume</Link>
        </div>
        <div id='link-icons' className='md:hidden gap-[3vh]'>
          <Link href='mailto:snaramirez872@gmail.com' target='_blank' rel='noreferrer'><Image className='icon' src={email} alt="email" height={40} width={40} /></Link>
          <Link href='https://github.com/snaramirez872' target='_blank' rel='noreferrer'><Image className='icon' src={github} alt="github" height={40} width={40} /></Link>
          <Link href='https://linkedin.com/in/seanaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={linkedin} alt="linkedin" height={40} width={40} /></Link>
          <Link href='https://instagram.com/seannybboy' target='_blank' rel='noreferrer'><Image className='icon' src={instagram} alt="instagram" height={40} width={40} /></Link>
          <Link href='https://x.com/snaramirez' target='_blank' rel='noreferrer'><Image className='icon' src={x} alt="x" height={40} width={40} /></Link>
        </div>
        <div className='old-link'>
          <Link className='hidden md:inline' href='https://seanaramirez-portfolio.web.app' target='_blank' rel='noreferrer'>Old Version of Website (Prior to June 2024)</Link>
          <Link className='inline md:hidden' href='https://seanaramirez-portfolio.web.app' target='_blank' rel='noreferrer'>Old Version of Website</Link>
        </div>
      </section>
    </main>
  );
}
