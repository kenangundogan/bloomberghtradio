'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = typeof window !== 'undefined' ? window.innerHeight : 800;
const THROTTLE_DELAY = 150; // ms

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(toggleVisibility, THROTTLE_DELAY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        toggleVisibility(); // İlk yüklemede kontrol et

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [toggleVisibility]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50 cursor-pointer 
            hover:bg-black/80 hover:bottom-10 hover:animate-pulse
            focus:bg-black/80 focus:bottom-10 focus:animate-pulse"
            aria-label="Sayfanın başına dön"
            title="Yukarı çık"
        >
            <ChevronUp className="w-6 h-6" aria-hidden="true" />
        </button>
    );
};

export default ScrollToTop; 