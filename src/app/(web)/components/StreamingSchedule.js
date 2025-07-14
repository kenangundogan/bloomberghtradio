'use client';
import { useState } from 'react';
import Image from '@/app/(web)/components/Image';
import Link from 'next/link';

export default function StreamingSchedule({ data, initialActiveDay }) {
    const [activeDay, setActiveDay] = useState(initialActiveDay);

    return (
        <div className='grid grid-cols-1 gap-4 mb-8'>
            <ul className='w-full bg-white p-4 md:p-8 flex justify-between gap-4 shadow-lg overflow-x-auto'>
                {data.map((gun) => (
                    <li
                        key={gun.date}
                        onClick={() => setActiveDay(gun.date)}
                        className={`flex flex-col text-center cursor-pointer whitespace-pre ${activeDay === gun.date ? 'font-bold text-black' : 'text-gray-500'}`}
                    >
                        <span className='text-xs'>{gun.date}</span>
                        <span className='text-xl'>{gun.dayName}</span>
                    </li>
                ))}
            </ul>

            {data.find(gun => gun.date === activeDay)?.programs.map((program, i) => (
                <Link  
                    href={`/programlar/${program.id}`}
                    key={i} 
                    className={`w-full flex flex-wrap md:flex-nowrap items-center gap-8 p-6 md:p-10 shadow-lg transition-all duration-1000 ${
                        program.isActive 
                            ? 'order-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white animate-gradient' 
                            : 'order-2 bg-white text-black'
                    }`}
                >
                    <div className='flex items-center gap-4 flex-none group'>
                        <div className={`relative w-24 h-24 border rounded-full before:[content:""] before:absolute before:-top-4 before:left-0 before:right-0 before:m-auto before:w-px before:h-34 before:rotate-30 ${
                            program.isActive 
                                ? 'border-white before:bg-white' 
                                : 'border-gray-900 before:bg-gray-900'
                        }`}>
                            <Image src={program.image.ratio1x1.small} alt={program.title} className='w-full h-full rounded-full absolute top-1 -left-1 group-hover:top-0 group-hover:-left-0 transition-all duration-300' />
                        </div>
                        <div className='flex flex-col gap-px leading-none'>
                            <div className='font-bold text-3xl'>{program.broadcast.time.start}</div>
                            <div className='mb-1'>{program.title}</div>
                            {program.isActive && <div className="text-sm font-bold rounded-full px-2 py-1 bg-yellow-600 text-center">YAYINDA</div>}
                        </div>
                    </div>
                    <div className='text-sm'>{program.description}</div>
                </Link>
            ))}
        </div>
    );
} 