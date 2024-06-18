'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname()


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className={`flex flex-row py-6 px-10 justify-between font-medium items-center ${pathname === '/market' ? `${scroll ? 'bg-white text-black' : 'text-black'}` : `${scroll ? 'bg-white text-black' : 'text-black'}`}`}>
                <Link href="/" className='flex flex-row gap-4 text-2xl items-center'>
                    <div className='relative w-8 h-8'>
                        <Image src={`${scroll ? '/images/logo.png' : '/images/logo.png'}`} alt='logo' fill />
                    </div>
                    Interweave
                </Link>
                <div className='hidden lg:flex flex-row items-center text-xl gap-10'>
                    <Link href="https://github.com/Interweave" target='_blank'>
                        Github
                    </Link>
                    <Link href="https://github.com/thedudeontitan/Interweave/blob/main/README.md" target='_blank'>
                        Documentation
                    </Link>
                    <Link href="#features">
                        Features
                    </Link>
                    <Link href="/">
                        Whitepaper
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href="" target='_blank' className='bg-white shadow-md hover:bg-gray-200 transition-all shadow-white text-black text-center rounded-xl px-10 py-2 text-lg lg:w-[12vw]'>
                        DEMO
                    </Link>
                </div>
                <div className='lg:hidden'>
                    <button onClick={handleMenuToggle} className='text-2xl'>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className={`lg:hidden flex flex-col items-center bg-white text-black py-4`}>
                    <Link href="https://github.com/Interweave" target='_blank' className='py-2'>
                        Github
                    </Link>
                    <Link href="https://github.com/thedudeontitan/Interweave/blob/main/README.md" target='_blank' className='py-2'>
                        Documentation
                    </Link>
                    <Link href="#features" className='py-2'>
                        Features
                    </Link>
                    <Link href="/" className='py-2'>
                        Whitepaper
                    </Link>
                    <Link href="" target='_blank' className='bg-white shadow-md hover:bg-gray-200 transition-all shadow-white text-black text-center rounded-xl px-10 py-2 text-lg mt-4 w-3/4'>
                        DEMO
                    </Link>
                </div>
            )}
        </div>
    );
}