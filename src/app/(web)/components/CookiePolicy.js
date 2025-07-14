'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const CookiePolicy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (cookieAccepted !== 'true') {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setIsVisible(false);
    };

    const handleReject = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div data-type="cookiePolicy" className="container fixed inset-x-0 md:inset-x-4 bottom-0 m-auto z-50">
            <div className="md:max-w-96 p-4 md:p-8 flex flex-wrap gap-4 items-center text-xs bg-black text-white">
                <div>
                    İnternet sitemizde kullanılan çerezlerle ilgili bilgi almak ve tercihlerinizi yönetmek için{' '}
                    <Link href="/cerez-politikasi" title="Çerez Politikası" className="underline font-bold">
                        Çerez Politikası
                    </Link>
                    , daha fazla bilgi için{' '}
                    <Link href="/aydinlatma-metni" title="Aydınlatma Metni" className="underline font-bold">
                        Aydınlatma Metnini
                    </Link>
                    {' '}sayfalarını ziyaret edebilirsiniz. Sitemizi kullanarak çerezleri kullanmamızı kabul edersiniz.
                </div>
                <div className="flex justify-end gap-4 *:flex *:items-center *:justify-center *:cursor-pointer *:text-white *:bg-blue-900 *:hover:bg-white *:hover:text-black">
                    <button 
                        onClick={handleAccept}
                        className="h-10 py-2 px-4"
                    >
                        Kabul Et
                    </button>
                    <div 
                        onClick={handleReject}
                        className="w-10 h-10 p-2"
                    >
                        <X size={12} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;






