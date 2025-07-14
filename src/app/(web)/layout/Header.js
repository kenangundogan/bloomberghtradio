'use client';

import React from 'react';
import Link from 'next/link';
import MegaMenu from '@/app/(web)/components/MegaMenu';

const Header = ({ menu }) => {
    const headerMenu = menu.filter(item => item.header && item.status === true);

    return (
        <header data-type="header" className='sticky z-50 top-0 w-full h-22 bg-gray-900'>
            <div className='container h-full m-auto p-4 flex justify-between items-center text-white'>
                <Link href="/">
                    <img src="/assets/images/logo/logo.svg" alt="logo" className='h-10 md:h-12' />
                </Link>
                <div className='flex items-center gap-4'>
                    <ul className='hidden md:flex items-center gap-4 *:hover:text-yellow-600'>
                        {headerMenu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <MegaMenu menu={menu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
