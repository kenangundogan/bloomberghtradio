'use client';

import { usePathname } from 'next/navigation';
import RadioPlayer from '@/app/(web)/components/RadioPlayer';

const exactHiddenRoutes = [];
const prefixHiddenRoutes = ["/podcastler/"];

export default function RadioPlayerWrapper({ radioStream }) {
    const pathname = usePathname();
    
    const isHidden =
        exactHiddenRoutes.includes(pathname) ||
        prefixHiddenRoutes.some(prefix => pathname.startsWith(prefix));

    if (isHidden) return null;

    return (
        <RadioPlayer
            title={radioStream.title}
            description={radioStream.description}
            src={radioStream.src}
            image={radioStream.image}
        />
    );
} 