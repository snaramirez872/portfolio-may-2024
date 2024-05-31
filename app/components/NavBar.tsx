'use client';
import React, { useState } from 'react'
import Link from 'next/link';

export const NavBar = () => {
    return (
        <nav className="bg-slate-900 text-white p-5 md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-3xl font-bold">Sean A Ramirez</a>
                <div className='space-x-9 text-xl hidden md:flex'>
                    <Link href="/projects" className='mx-2 p-3 hover:text-emerald-300'>Projects</Link>
                    <Link href="#" className='md:bg-orange-500 md:rounded-xl lg:hover:bg-orange-600 lg:hover:rounded-3xl p-3 mx-2' target='_blank' rel='noreferrer'>Resume</Link>
                </div>
            </div>
        </nav>
    );
}
