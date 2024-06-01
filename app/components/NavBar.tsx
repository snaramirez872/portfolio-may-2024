import React from 'react'
import Link from 'next/link';

export const NavBar = () => {
    return (
        <nav className="text-white p-5 w-screen">
            <div className="flex justify-between items-center w-full">
                <a href="/" className="ml-[7vh] text-4xl font-bold">Sean A Ramirez</a>
                <div className='mr-[7vh] space-x-11 text-xl hidden md:flex'>
                    <Link href="/" className='p-3 hover:text-emerald-300'>About Me</Link>
                    <Link href="/projects" className='p-3 hover:text-emerald-300'>Projects</Link>
                    <Link href="https://drive.google.com/file/d/1xt08p77uQfUoizwI1NsAV8rXP19l-zTV/view" className='md:bg-emerald-300 md:text-black md:rounded-xl lg:hover:rounded-3xl p-3' target='_blank' rel='noreferrer'>Resume</Link>
                </div>
            </div>
        </nav>
    );
}
