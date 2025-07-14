import { SwiperContainer, Swiper } from '@/app/(web)/components/Swiper';
import { MoveRight } from 'lucide-react';
import Image from '@/app/(web)/components/Image';
import Link from 'next/link'

export default function ProgramListSliderWidget({ programs }) {
    return (
        <section>
            <SwiperContainer className=''
                data-options='{
                    "effect": "carousel",
                    "grabCursor": true,
                    "loop": true,
                    "loopAdditionalSlides": 1,
                    "slidesPerView": "auto",
                    "initialSlide": 2,
                    "carouselEffect": {
                        "opacityStep": 0.33,
                        "scaleStep": 0.2,
                        "sideSlides": 2
                    },
                    "autoplay": {
                        "delay": 3000
                    }
                    }'
            >
                <Swiper>
                    {programs.map((item, i) => (
                        <Swiper.Item key={i} className='!max-w-xl bg-gray-900'>
                            <Link key={i} href={`/programlar/${item.title}-${item.id}`} className='swiper-carousel-animate-opacity w-full flex flex-wrap md:flex-nowrap p-8 group'>
                                <Image src={item.image} alt={item.title} width='w-1/2' className='aspect-square h-auto' />
                                <div className='relative w-1/2 flex flex-col gap-2 justify-center text-white p-8'>
                                    <div className='text-yellow-600 text-sm'>Hafta içi her gün {item.time}</div>
                                    <div className='text-2xl font-bold line-clamp-2'>{item.title}</div>
                                    <div className='text-sm line-clamp-3'>{item.description}</div>
                                    <MoveRight strokeWidth={1} className='text-yellow-600' />
                                </div>
                            </Link>
                        </Swiper.Item>
                    ))}
                </Swiper>
            </SwiperContainer>
        </section>
    );
}
