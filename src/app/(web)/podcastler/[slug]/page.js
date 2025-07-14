import { getIdFromSlug } from '@/app/lib/slug';
import { notFound } from 'next/navigation';
import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import Image from '@/app/(web)/components/Image';
import PodcastListWidget from '@/app/(web)/components/PodcastListWidget';
import PodcastPlayer from '@/app/(web)/components/PodcastPlayer';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async (endpoint) => {
    const response = await apiClient(endpoint);
    if (response.status === false) notFound();
    return response;
});

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const podcastId = getIdFromSlug(resolvedParams.slug);
    const { extras } = await getData(`/podcastler/${podcastId}`);

    return createMetadata({
        title: extras.title,
        description: extras.description,
        keywords: extras.keywords,
        alternates: {
            canonical: extras.url.href
        },
        openGraph: {
            title: extras.title,
            description: extras.description,
            type: 'website',
            images: {
                url: extras.image.url,
                width: extras.image.width,
                height: extras.image.height,
                type: extras.image.type
            }
        }
    });
}

export default async function Podcast({ params: asyncParams }) {
    const resolvedParams = await asyncParams;
    const podcastId = getIdFromSlug(resolvedParams.slug);
    const { body: { podcast, relations }, extras } = await getData(`/podcastler/${podcastId}`);
    const podcastsListResponse = await getData(relations.podcastler.endpoint);
    const podcastsList = podcastsListResponse?.body?.podcastler || [];

    return (
        <>
            <PodcastPlayer
                title={podcast.programTitle}
                subtitle={podcast.title}
                date={podcast.date?.publishedAt}
                src={podcast.audio.source}
                image={podcast.image?.ratio1x1?.small}
            />
            <Featured backgroundSize='before:h-[calc(100%+8rem)] after:h-[calc(100%+8rem)] before:bg-[url(/assets/images/background/4.jpg)] after:to-red-500 after:opacity-75'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name={podcast.title} icon='Podcast' />
                <div className='w-full flex flex-wrap md:flex-nowrap gap-8 mb-4 pb-8'>
                    <div className='bg-white p-4'>
                        <Image src={podcast.image?.ratio1x1?.small} alt={podcast.title} className='aspect-square h-auto md:w-96' />
                    </div>
                    <div className='w-full max-w-xl flex flex-col gap-4'>
                        <h2 className="text-sm">{podcast.speaker}</h2>
                        <h1 className="text-3xl font-bold">{podcast.title}</h1>
                        <p className="text-sm">{podcast.date?.publishedAt}</p>
                        <p>{podcast.description}</p>
                        <ul className='text-black flex gap-4 *:w-10 *:h-10 *:flex *:items-center *:justify-center *:bg-white *:rounded-full *:hover:bg-blue-900 *:hover:text-white'>
                            <li><Link href="/facebook"><Facebook strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/twitter"><Twitter strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/instagram"><Instagram strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/youtube"><Youtube strokeWidth={1} size={20} /></Link></li>
                        </ul>
                    </div>
                </div>
            </Featured>

            <Section sectionName='podcastler' sectionClass='mb-8'>
                <Heading name='Diğer Podcastler' />
                <PodcastListWidget podcasts={podcastsList} program={podcast.programTitle} />
            </Section>
        </>
    );
}
