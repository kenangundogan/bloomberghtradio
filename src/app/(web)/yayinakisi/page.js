import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import StreamingSchedule from '@/app/(web)/components/StreamingSchedule';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/yayinakisi');
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

export default async function YayinAkisi() {
    const { body, extras } = await getData();
    
    const initialActiveDay = body.find(day => 
        day.programs.some(program => program.isActive)
    )?.date;

    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+4rem)]'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name="Yayin Akışı" icon='Streaming'/>
            </Featured>

            <Section sectionName='streaming'>
                <StreamingSchedule data={body} initialActiveDay={initialActiveDay} />
            </Section>
        </>
    );
}
