import Link from 'next/link'
import Image from '@/app/(web)/components/Image'
import { MoveRight, AudioLines } from 'lucide-react'

export default function BoxType1({ id = "", slug = "", url = "", image = "", title = "", presenters = [], description = "", broadcast = "" }) {
    return (
        <Link key={id} href={`/${url}`} className='w-full flex flex-wrap md:flex-nowrap p-8 bg-gray-900 group'>
            <Image src={image} alt={title} className='aspect-square h-auto w-1/2' />
            <div className='relative w-1/2 flex flex-col gap-2 justify-center text-white p-8'>
                <div className='text-white/10 absolute top-8 -left-14 flex transition-all group-hover:left-0'>
                    <AudioLines size={70} strokeWidth={1} />
                    <AudioLines size={70} strokeWidth={1} />
                    <AudioLines size={70} strokeWidth={1} />
                    <AudioLines size={70} strokeWidth={1} />
                </div>
                <div className='text-sm text-yellow-600'>{broadcast.time.description}</div>
                <div className='text-base'>{presenters.map(presenter => presenter.name).join(', ')}</div>
                <div className='text-xl font-bold line-clamp-2'>{title}</div>
                <div className='text-sm line-clamp-2'>{description}</div>
                <MoveRight size={18} className='text-yellow-600' strokeWidth={1} />
            </div>
        </Link>
    );
}
