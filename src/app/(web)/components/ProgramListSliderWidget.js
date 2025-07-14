'use client';
import { SwiperContainer, Swiper } from '@/app/(web)/components/Swiper';
import BoxType1 from '@/app/(web)/components/(box)/boxType1';

export default function ProgramListSliderWidget({ programs }) {

    return (
        <SwiperContainer
            className='!min-h-90'
            paginationClassName='!text-left'
            data-options='{
                "slidesPerView": "auto",
                "spaceBetween": 20,
                "pagination": true,
                "autoHeight": true,
                "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": "true"
                },
                "autoplay": {
                    "delay": 5000
                }
                }'
        >
            <Swiper className='mb-4'>
                {programs.map((item) => (
                    <Swiper.Item key={item.id} className='!max-w-xl'>
                        <BoxType1
                            key={item.id}
                            slug={item.slug}
                            url={item.url}
                            image={item.image.ratio1x1.small}
                            title={item.title}
                            presenters={item.presenters}
                            description={item.description}
                            broadcast={item.broadcast} />
                    </Swiper.Item>
                ))}
            </Swiper>
        </SwiperContainer>
    );
}
