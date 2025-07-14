import { getIdFromSlug } from '@/app/lib/slug';
import { notFound } from 'next/navigation';
import Featured from '@/app/(web)/components/Featured';
import Heading from '@/app/(web)/components/Heading';
import Section from '@/app/(web)/components/Section';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import Image from '@/app/(web)/components/Image';
import ProgramListSliderWidget from '@/app/(web)/components/ProgramListSliderWidget';
import PodcastListWidget from '@/app/(web)/components/PodcastListWidget';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async (endpoint) => {
    const response = await apiClient(endpoint);
    if (response.status === false) notFound();
    return response;
});

// Slug'dan program ID'sini al ve geçersizse 404'e yönlendir
function getValidatedProgramId(slug) {
    const programId = getIdFromSlug(slug);
    if (!programId) notFound();
    return programId;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const programId = getValidatedProgramId(resolvedParams.slug);
    const { extras } = await getData(`/programlar/${programId}`);

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

export default async function Program({ params }) {
    const resolvedParams = await params;
    const programId = getValidatedProgramId(resolvedParams.slug);
    const { body: { program, relations }, extras } = await getData(`/programlar/${programId}`);
    const programsListResponse = await getData(relations.programlar.endpoint);
    const programsList = programsListResponse?.body?.programlar || [];

    const podcastsListResponse = await getData(relations.podcastler.endpoint);
    const podcastsList = podcastsListResponse?.body?.podcastler || [];
    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+14rem)] after:h-[calc(100%+14rem)] before:bg-[url(/assets/images/background/2.jpg)] after:opacity-75'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <div className='w-full flex flex-wrap md:flex-nowrap gap-8 mb-4 pb-8'>
                    <div className='bg-white p-4'>
                        <Image src={program.image.ratio1x1.small} alt={program.title} className='aspect-square h-auto md:w-96' />
                    </div>
                    <div className='relative w-full max-w-xl flex flex-col justify-center gap-2 text-white'>
                        <div className='text-yellow-600 text-sm'>{program.broadcast.time.description}</div>
                        <div className='text-base'>{program.presenters.map(presenter => presenter.name).join(', ')}</div>
                        <div className='text-2xl font-bold'>{program.title}</div>
                        <div>{program.description}</div>
                        <ul className='text-black flex gap-4 *:w-10 *:h-10 *:flex *:items-center *:justify-center *:bg-white *:rounded-full *:hover:bg-blue-900 *:hover:text-white'>
                            <li><Link href="/facebook"><Facebook strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/twitter"><Twitter strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/instagram"><Instagram strokeWidth={1} size={20} /></Link></li>
                            <li><Link href="/youtube"><Youtube strokeWidth={1} size={20} /></Link></li>
                        </ul>
                    </div>
                </div>
            </Featured>

            <Section sectionName='podcastler' sectionClass='pb-8'>
                <Heading name='Podcastler' />
                <PodcastListWidget podcasts={podcastsList} program={program} />
            </Section>

            <Section sectionName='programlar' sectionClass='py-4 md:py-24 bg-linear-to-r from-blue-900 to-gray-900'>
                <Heading name='Diğer Programlar' />
                <ProgramListSliderWidget programs={programsList} />
            </Section>
        </>
    );
}
