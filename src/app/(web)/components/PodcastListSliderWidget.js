'use client';
import { SwiperContainer, Swiper } from '@/app/(web)/components/Swiper';
import BoxType2 from '@/app/(web)/components/(box)/boxType2';

export default function PodcastListSliderWidget({ podcasts }) {
    return (
        <SwiperContainer
            className='!min-h-120'
            paginationClassName='!text-left'
            data-options='{
                "slidesPerView": "auto",
                "spaceBetween": 20,
                "pagination": true,
                "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": "true"
                }
                }'
        >
            <Swiper className='mb-4'>
                {podcasts.map((item, i) => (
                    <Swiper.Item key={i} className='!max-w-sm'>
                        <BoxType2
                            url={item.url}
                            image={item.image.ratio1x1.small}
                            title={item.title}
                            description={item.description}
                            presenters={item.presenters}
                            date={item.date.publishedAt} />
                    </Swiper.Item>
                ))}
            </Swiper>
        </SwiperContainer>
    );
}
