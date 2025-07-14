import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import PodcastMainList from '@/app/(web)/components/PodcastMainList';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/podcastler');
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

export default async function Podcastler() {
    const { body, extras } = await getData();

    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+15rem)] after:h-[calc(100%+15rem)] before:bg-[url(/assets/images/background/4.jpg)] after:to-red-500 after:opacity-90'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name="Podcastler" icon='Podcast' />
            </Featured>

            <Section sectionName='podcastler' sectionClass='mb-8'>
                <PodcastMainList podcasts={body.podcastler} />
            </Section>
        </>
    );
}
