'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, Dot } from 'lucide-react';

export default function MegaMenu({ menu }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setMenuOpen(false), 300);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsAnimating(false);
            setTimeout(() => setMenuOpen(false), 300);
        }
    };

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                setIsAnimating(false);
                setTimeout(() => setMenuOpen(false), 300);
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const megamenuData = menu.filter(item => item.megamenu && item.status === true);

    return (
        <div className='relative z-40'>
            <button onClick={toggleMenu} className='flex items-center hover:text-yellow-600 md:cursor-pointer'>
                <Menu strokeWidth={1} size={20} />
            </button>
            {menuOpen && (
                <div 
                    className='
                    fixed inset-0 w-full h-[calc(100vh-5rem)] left-0 top-22
                    before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-indigo-950 before:to-blue-800 before:opacity-90
                    after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url(/assets/images/background/2.jpg)] after:opacity-10'
                    onClick={handleOverlayClick}
                >
                    <div className='container h-full m-auto px-4 py-4 md:py-8 overflow-y-auto'>
                        <ul 
                            ref={menuRef}
                            className={`
                                relative z-10 flex flex-col gap-4 text-3xl md:text-7xl font-bold leading-none mb-20
                                transform transition-all duration-300 ease-out
                                ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                            `}
                        >
                            {megamenuData.map((item, index) => (
                                <li 
                                    key={index}
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                        transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
                                        opacity: isAnimating ? 1 : 0
                                    }}
                                    className="transition-all duration-300 ease-out"
                                >
                                    <Link 
                                        href={item.href} 
                                        className='flex items-center gap-1 transition-colors duration-200 hover:text-yellow-600'
                                        onClick={() => {
                                            setIsAnimating(false);
                                            setTimeout(() => setMenuOpen(false), 100);
                                        }}
                                    >
                                        {/* <Dot size={20} className='opacity-20' /> */}
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
