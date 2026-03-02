'use client'
import Button from "../ui/Button"
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Image from "next/image";

export default function Footer() {
    return (
        <div className='flex flex-row justify-between bg-rave-black px-6 py-6'>
        <div className='flex flex-col justify-between'>
            <Image
            src='/sosyal-logo-globe.png'
            width={250}
            height={250}
            alt='SOSYAL Globe Logo'
            />
            <h3 className="text-ara-white font-horizon text-md">STAY CONNECTED. STAY SOSYAL.</h3>
            <Button intent="primary" size="md">JOIN OUR DISCORD</Button>
        </div>
        <div>
            <ul>
                <a className="text-ara-white font-sm font-helvetica" href="https://instagram.com/sosyalstages">INSTAGRAM</a>
                <a className="text-ara-white font-sm font-helvetica" href="https://tiktok.com/@sosyalstages">TIKTOK</a>
                <a className="text-ara-white font-sm font-helvetica" href="https://www.youtube.com/@SosyalStages">YOUTUBE</a>
                <Link to='/madebyhumans'>MADE BY HUMANS</Link>
                <p className="text-trap-grey font-sm font-helvetica">© 2026 SOSYAL STAGES LLC</p>
            </ul>
        </div>
    </div>
    )
}