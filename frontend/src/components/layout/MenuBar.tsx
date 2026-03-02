'use client'
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Image from 'next/image';

export default function MenuBar() {
    return (
        <nav>
            <div className="bg-transparent flex flex-row justify-between font-helvetica text-sm text-center">
                <Link to='/about'>MANIFESTO</Link>
                <Link to='/artists'>ARTISTS</Link>
                <Image
                src='/sosyal-logo-globe.png'
                width={500}
                height={500}
                alt='SOSYAL Globe Logo'
                />
                <Link to='/contact'>CONTACT</Link>
                <Link to='/merch'>MERCH</Link>
            </div>
        </nav>
    )
}