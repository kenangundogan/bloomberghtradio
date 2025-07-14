'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import Featured from '@/app/(web)/components/Featured';

export default function NotFoundPage() {
    const [countdown, setCountdown] = useState(50);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.href = '/';
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Featured sectionName="not-found" sectionClass="min-h-screen flex justify-center items-center text-center" backgroundSize='before:h-full after:h-full before:bg-[url(/assets/images/background/2.jpg)] after:opacity-75'>
            <div className="flex flex-col items-center gap-4 leading-none">
                <Link href="/">
                    <img src="/assets/images/logo/logo.svg" alt="logo" className='h-10 md:h-12' />
                </Link>
                <h1 className='font-bold text-[10rem] md:text-[15rem] text-white'>404</h1>
                <p className="text-sm md:text-lg text-white">
                    <span className='text-white'>Aradığınız sayfa bulunamadı.</span>
                    <br />
                    <span className='text-white'>{countdown} saniye sonra anasayfaya yönlendirileceksiniz...</span>
                </p>
                <div className="flex gap-4 mt-4">
                    <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 rounded-full transition-colors group">
                        <Home strokeWidth={1} size={18} className="group-hover:translate-x-1 transition-transform" />
                        <span>Anasayfaya Dön</span>
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors group"
                    >
                        <ArrowLeft strokeWidth={1} size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Geri Dön</span>
                    </button>
                </div>
            </div>
        </Featured>
    );
}
