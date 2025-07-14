'use client';
import { useState, useEffect, useMemo } from 'react';
import BoxType2 from '@/app/(web)/components/(box)/boxType2';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PodcastMainList({ podcasts = [] }) {
    const [activeFilter, setActiveFilter] = useState('All');
    
    // Program başlıklarını hesapla
    const programTitles = useMemo(() => {
        return ['All', ...new Set(podcasts.map(p => p.programTitle))];
    }, [podcasts]);
    
    // Filtrelenmiş podcastleri hesapla
    const filteredPodcasts = useMemo(() => {
        return activeFilter === 'All'
            ? podcasts
            : podcasts.filter(p => p.programTitle === activeFilter);
    }, [podcasts, activeFilter]);

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                freeMode={true}
                spaceBetween={10}
                className="mb-8"
            >
                {programTitles.map((programTitle, i) => (
                    <SwiperSlide key={i} className='!w-auto'>
                        <button
                            className={`px-6 py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                                activeFilter === programTitle 
                                    ? 'bg-white text-black hover:bg-gray-100' 
                                    : 'bg-blue-950 text-white hover:bg-blue-800'
                            }`}
                            onClick={() => setActiveFilter(programTitle)}
                            aria-pressed={activeFilter === programTitle}
                        >
                            {programTitle}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {filteredPodcasts.length > 0 ? (
                    filteredPodcasts.map((podcast) => (
                        <BoxType2
                            key={podcast.id}
                            url={podcast.url}
                            image={podcast.image?.ratio1x1?.small || podcast.image?.url}
                            title={podcast.title}
                            description={podcast.description}
                            presenters={podcast.presenters}
                            date={podcast.date?.publishedAt}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        Bu kategoride podcast bulunamadı.
                    </div>
                )}
            </div>
        </>
    );
} 