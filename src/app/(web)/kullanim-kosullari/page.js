import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/kullanim-kosullari');
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

export default async function Main() {
    const { body, extras } = await getData();

    return (
        <>
            <Featured backgroundSize='before:h-[calc(100%+10rem)]'>
                <Breadcrumb>
                    {extras.breadcrumb?.items?.map((item, index) => (
                        <Breadcrumb.Item key={item.url} href={index === extras.breadcrumb.items.length - 1 ? undefined : item.url}>
                            {item.name}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Heading name={body.title} icon='Info' />
            </Featured>
            <Section sectionName='ExplanatoryText'>
                <div className='bg-white p-4 md:p-8 *:pb-4 text-black'>
                    {body.content.map((item) => (
                        <div key={item.id}>
                            {item.type === 'header' && item.data.level === 1 && <h1 className='text-3xl md:text-4xl font-bold mb-4'>{item.data.text}</h1>}
                            {item.type === 'header' && item.data.level === 2 && <h2 className='text-2xl md:text-3xl font-bold mb-4'>{item.data.text}</h2>}
                            {item.type === 'header' && item.data.level === 3 && <h3 className='text-xl md:text-2xl font-bold mb-4'>{item.data.text}</h3>}
                            {item.type === 'header' && item.data.level === 4 && <h4 className='text-lg md:text-xl font-bold mb-4'>{item.data.text}</h4>}
                            {item.type === 'header' && item.data.level === 5 && <h5 className='text-base md:text-lg font-bold mb-4'>{item.data.text}</h5>}
                            {item.type === 'header' && item.data.level === 6 && <h6 className='text-sm md:text-base font-bold mb-4'>{item.data.text}</h6>}
                            {item.type === 'list' && <ol className='list-decimal list-inside mb-4'>
                                {item.data.items.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item.content }}></li>
                                ))}
                            </ol>}
                            {item.type === 'table' && <table className='table-auto w-full mb-4'>
                                <tbody>
                                    {item.data.content.map((row, index) => (
                                        <tr key={index}>
                                            {row.map((cell, cellIndex) =>
                                                <td key={cellIndex} className='border border-gray-300 p-2' dangerouslySetInnerHTML={{ __html: cell }} />
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}
                            {item.type === 'paragraph' && <p className='mb-4' dangerouslySetInnerHTML={{ __html: item.data.text }}></p>}
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
