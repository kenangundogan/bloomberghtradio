'use client';
import { SwiperContainer, Swiper } from '@/app/(web)/components/Swiper';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import apiClient from '@/app/lib/apiClient';

export default function StreamingListWidget({ initialData }) {
    const [activeDay, setActiveDay] = useState(initialData.activeDay);
    const [activeProgram, setActiveProgram] = useState(initialData.activeProgramIndex);

    useEffect(() => {
        const fetchStreamings = async () => {
            try {
                const res = await apiClient('/yayinakisi');
                const activeDay = res.yayinakisi.find(gun => gun.isActive);
                if (activeDay) {
                    const activeProgramIndex = activeDay.programs.findIndex(program => program.isActive);
                    setActiveDay(activeDay);
                    setActiveProgram(activeProgramIndex);
                }
            } catch (error) {
                console.log('Yayın akışı verisi alınamadı:', error);
            }
        };

        // Her 30 saniyede bir güncelle
        const interval = setInterval(fetchStreamings, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SwiperContainer className='h-44 md:px-14' swiperWrapperClassName='h-full bg-white text-black p-4'
            data-options={JSON.stringify({
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                initialSlide: activeProgram,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    1170: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            })}
            navPrevClassName="!hidden md:!flex hover:!bg-blue-900 hover:!text-white transition-all duration-300"
            navNextClassName="!hidden md:!flex hover:!bg-blue-900 hover:!text-white transition-all duration-300"
            paginationClassName=""
        >
            <Swiper>
                {activeDay && activeDay.programs.map((program) => (
                    <Swiper.Item key={program.id} className='!h-auto'>
                        <Link href={program.slug} className={`group relative w-full h-full flex items-center gap-4 px-8 py-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300`}>
                            <div className='relative w-24 h-24 border border-gray-900 rounded-full before:[content:""] before:absolute before:-top-4 before:left-0 before:right-0 before:m-auto before:w-px before:h-34 before:bg-gray-900 before:rotate-30'>
                                <img src={program.image.ratio1x1.small} alt={program.title} className='w-full h-full rounded-full absolute top-1 -left-1 group-hover:top-0 group-hover:-left-0 transition-all duration-300' />
                            </div>
                            <div>
                                <div className='font-bold text-3xl'>{program.broadcast.time.start}</div>
                                <div>{program.title}</div>
                                {program.isActive &&
                                    <>
                                        <div className='inline-block px-3 py-1 text-sm bg-yellow-500 text-white text-center rounded-full'>Yayında</div>
                                        <div className='absolute top-4 right-4'>
                                            <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                                            <div className='w-4 h-4 bg-blue-800 rounded-full animate-ping absolute top-0 left-0'></div>
                                        </div>
                                    </>
                                }
                            </div>
                        </Link>
                    </Swiper.Item>
                ))}
            </Swiper>
        </SwiperContainer>
    );
}
