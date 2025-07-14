import Link from 'next/link'
import Image from '@/app/(web)/components/Image'
import { Play, Podcast } from 'lucide-react'

export default function BoxType1({ id = "", url = "", image = "", title = "", presenters = [], description = "", date = "" }) {
    return (
        <Link key={id} href={url} className='w-full block relative bg-white p-4 group text-black'>
            <div className='w-full relative'>
                <div className='relative mb-2'>
                    <div className='absolute z-20 left-4 bottom-4 rounded-full flex'>
                        <Play strokeWidth={1} size={18} className='w-10 h-10 bg-white rounded-full flex justify-center items-center p-2.5 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300' />
                        <Podcast strokeWidth={1} size={18} className='w-10 h-10 bg-blue-900 text-white rounded-full -ml-2 flex justify-center items-center p-2.5 group-hover:bg-white group-hover:text-blue-900 transition-all duration-300' />
                    </div>
                    <Image src={image} alt={title} className='aspect-square h-auto w-full' />
                </div>
                <div className='flex flex-col gap-px'>
                    <div className='text-sm'>{presenters.map(presenter => presenter.name).join(', ')}</div>
                    <div className='text-lg font-bold'>{title}</div>
                    <div className='text-sm'>{date}</div>
                </div>
            </div>
        </Link>
    );
}
