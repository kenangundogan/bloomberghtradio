'use client';
import BoxType2 from '@/app/(web)/components/(box)/boxType2';

export default function PodcastList({ podcasts }) {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {podcasts.map((podcast) => (
                    <BoxType2
                        key={podcast.id}
                        url={podcast.url}
                        image={podcast.image.ratio1x1.small}
                        title={podcast.title}
                        description={podcast.description}
                        presenters={podcast.presenters}
                        date={podcast.date.publishedAt}
                    />
                ))}
            </div>
        </>
    );
} 