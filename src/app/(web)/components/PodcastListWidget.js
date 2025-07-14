import Link from 'next/link';
import { Podcast, Play, Download } from 'lucide-react';
export default function PodcastListWidget({ podcasts, program }) {

    return (
        <div className="grid grid-cols-1 gap-4">
            {podcasts.map((item) => (
                <Link key={item.id} href={item.url} className="w-full flex items-center gap-4 p-4 md:p-8 bg-gray-100 hover:bg-blue-100 text-black">
                    <div className='w-full flex items-start flex-col md:items-center md:flex-row gap-4'>
                        <div className="relative h-14 flex">
                            {/* <img src="/assets/images/radio/1x1.svg" className="relative w-14 h-full rounded-full object-cover bg-white/10" /> */}
                            <Podcast strokeWidth={1} size={18} className='w-14 h-14 p-2 rounded-full bg-yellow-600 text-white' />
                            <img src={item.image?.ratio1x1?.small} className="relative z-10 w-14 h-full -ml-4 rounded-full object-cover bg-white/10" />
                        </div>
                        <div className='leading-none flex flex-col gap-px'>
                            <div className="text-sm font-bold">{program.title}</div>
                            <div className="text-sm font-bold">{item.title}</div>
                            <div className="text-sm">{item.date?.publishedAt}</div>
                        </div>
                    </div>
                    <div className='flex items-center flex-col md:flex-row gap-2'>
                        <div className='text-sm whitespace-nowrap'>
                            {item.audio.time} dk
                        </div>
                        <div className='w-14 h-14 rounded-full flex justify-center items-center bg-blue-900 text-white'>
                            <Play strokeWidth={1} size={18} />
                        </div>
                        <div className='w-14 h-14 rounded-full flex justify-center items-center bg-blue-900 text-white'>
                            <Download strokeWidth={1} size={18} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
