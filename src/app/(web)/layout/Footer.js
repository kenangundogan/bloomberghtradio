'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = ({ menu, social, store, copyright }) => {
    const footerMenu = menu.filter(item => item.footer && item.status === true);

    return (
        <footer data-type="footer" className="relative text-white">

            <div className="bg-linear-to-r from-gray-900 to-blue-900">
                <div className="container m-auto px-4 py-12 flex flex-wrap justify-between gap-4 items-center">
                    <div className="flex flex-col gap-2">
                        <div className="font-black text-lg md:text-4xl">Bloomberg HT Radyo</div>
                        <div className="text-sm">canlı yayına ve podcast yayınlarına kolayca ulaşın!</div>
                    </div>
                    <ul className="flex gap-2">
                        {store.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} target="_blank">
                                    <img src={`/assets/images/store/${item.platform}.svg`} alt={item.platform} className="h-10" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-950">
                <div className="container m-auto px-4 py-12 flex flex-wrap justify-between items-center gap-4">
                    <Link href="/">
                        <img src="/assets/images/logo/logo.svg" alt="logo" className="h-10" />
                    </Link>
                    <ul className="flex items-center justify-center gap-4 *:bg-blue-900 *:rounded-full *:w-10 *:h-10 *:flex *:items-center *:justify-center *:hover:bg-blue-950">
                        {social.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} target="_blank">
                                    {item.platform === 'facebook' && <Facebook strokeWidth={1} size={20} />}
                                    {item.platform === 'twitter' && <Twitter strokeWidth={1} size={20} />}
                                    {item.platform === 'instagram' && <Instagram strokeWidth={1} size={20} />}
                                    {item.platform === 'youtube' && <Youtube strokeWidth={1} size={20} />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-900">
                <div className="container m-auto px-4 py-12 flex gap-4 flex-wrap justify-between items-center">
                    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 *:hover:text-yellow-500">
                        {footerMenu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="w-auto inline-block text-xs py-8 opacity-50">
                        {copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
