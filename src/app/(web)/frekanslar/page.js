import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import { RadioTower } from 'lucide-react';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/frekanslar');
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

export default async function Frequency() {
    const { body, extras } = await getData();

    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+5rem)]'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name="Frekanslar" icon='Frekanslar' />
            </Featured>
            
            <Section sectionName='Frequency'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                    {body.frekanslar.map((item, index) => (
                        <div key={index} className="group bg-gray-100 flex items-center gap-4 p-4 md:p-8 hover:bg-blue-900 hover:text-white transition-all duration-300">
                            <div className='w-16 h-16 flex flex-none items-center justify-center bg-white rounded-full p-4'>
                                <RadioTower strokeWidth={1} size={24} className='text-blue-900'/>
                            </div>
                            <div className='*:leading-none *:mb-1'>
                                <h3 className="text-lg text-black font-bold">{item.city}</h3>
                                <p className="text-3xl text-blue-900 group-hover:text-white font-semibold">{item.frequency}</p>
                                <p className="text-sm text-gray-600 group-hover:text-white">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
