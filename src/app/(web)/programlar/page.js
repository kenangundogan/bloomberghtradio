import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import BoxType1 from '@/app/(web)/components/(box)/boxType1';
import apiClient from '@/app/lib/apiClient';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';
import { cache } from 'react';

// Programları önbelleğe alıyoruz
const getData = cache(async () => {
    return await apiClient('/programlar');
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

export default async function Program() {
    const { body, extras } = await getData();

    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+10rem)] after:!h-[calc(100%+10rem)] after:h-[calc(100%+14rem)] before:bg-[url(/assets/images/background/2.jpg)] after:opacity-90'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name={extras.title} />
            </Featured>

            <Section sectionName='programlar'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8'>
                    {body.programlar.map((item) => (
                        <BoxType1
                            key={item.id}
                            slug={item.slug}
                            url={item.url}
                            image={item.image.ratio1x1.small}
                            title={item.title}
                            presenters={item.presenters}
                            description={item.description}
                            broadcast={item.broadcast} />
                    ))}
                </div>
            </Section>
        </>
    );
}
