import Section from '@/app/(web)/components/Section';
import Featured from '@/app/(web)/components/Featured';
import Heading from '@/app/(web)/components/Heading';
import Ticker from '@/app/(web)/components/Ticker';
import StreamingListSliderWidget from '@/app/(web)/components/StreamingListWidget';
import ProgramListSliderWidget from '@/app/(web)/components/ProgramListSliderWidget';
import PodcastListSliderWidget from '@/app/(web)/components/PodcastListSliderWidget';
import ProgramListCollageWidget from '@/app/(web)/components/ProgramListCollageWidget';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/anasayfa');
});

export async function generateMetadata() {
    const { extras } = await getData();

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

export default async function Home() {
    const { body } = await getData();

    const [programlar, podcasts, frekanslar, yayinakisi] = await Promise.all([
        apiClient(body.relations.programlar.endpoint),
        apiClient(body.relations.podcastler.endpoint),
        apiClient(body.relations.frekanslar.endpoint),
        apiClient(body.relations.yayinakisi.endpoint)
    ]);

    const activeDay = yayinakisi.body.find(gun => gun.isActive);
    const activeProgramIndex = activeDay ? activeDay.programs.findIndex(program => program.isActive) : 0;

    return (
        <>
            <Featured sectionClass='min-h-[calc(100vh-20rem)] max-h-[calc(100vh-20rem)] overflow-hidden' backgroundSize='before:h-[100%]' sectionWrapperClass='!max-w-full !px-0'>
                <ProgramListCollageWidget programs={programlar.body.programlar} />
            </Featured>

            <Section sectionName='streaming' sectionClass='z-10 -mt-22'>
                <StreamingListSliderWidget initialData={{ activeDay, activeProgramIndex }} />
            </Section>

            <Section sectionName='ticker' sectionWrapperClass='!max-w-full py-8'>
                <Ticker
                    direction="left" speed={1} className='h-20'
                    items={frekanslar.body.frekanslar.map((frekans, index) => {
                        const randomFreq = frekanslar.body.frekanslar[Math.floor(Math.random() * frekanslar.body.frekanslar.length)];
                        return {
                            text: (randomFreq.city.toUpperCase()) + " " + randomFreq.frequency,
                            className: index % 2 === 0 ? "font-bold" : ""
                        };
                    })}
                />

                <Ticker
                    direction="right" speed={1} className='h-20'
                    items={frekanslar.body.frekanslar.map((frekans, index) => {
                        const randomFreq = frekanslar.body.frekanslar[Math.floor(Math.random() * frekanslar.body.frekanslar.length)];
                        return {
                            text: (randomFreq.city.toUpperCase()) + " " + randomFreq.frequency,
                            className: index % 2 === 0 ? "" : "font-bold text-blue-950"
                        };
                    })}
                />
            </Section>

            <Section sectionName='podcastler' sectionClass='py-4 md:py-24 bg-gray-100'>
                <Heading name="Podcastler" className='!text-black' icon='Podcast' />
                <PodcastListSliderWidget podcasts={podcasts.body.podcastler} />
            </Section>

            <Section sectionName='programlar' sectionClass='py-4 md:py-24 bg-linear-to-r from-blue-900 to-gray-900'>
                <Heading name="Programlar" icon='Default' />
                <ProgramListSliderWidget programs={programlar.body.programlar} />
            </Section>
        </>
    );
}
