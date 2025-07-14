import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import apiClient from '@/app/lib/apiClient';
import ContactForm from '@/app/(web)/components/ContactForm';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';
import { cache } from 'react';

const getData = cache(async () => {
    return await apiClient('/iletisim');
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
                <Heading name="İletişim" icon='Map' />
            </Featured>
            <Section sectionName='Contact'>
                <div className="mb-8">
                    <div className="w-full h-[400px] overflow-hidden">
                        <iframe
                            src={body.map.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-black">
                    <div className='bg-gray-100 p-4 md:p-8'>
                        <h2 className="text-2xl font-bold mb-4">
                            İletişim Bilgileri
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>Adres:</strong>
                                <br />
                                {body.contact.address.street},
                                <br />
                                {body.contact.address.city},
                                <br />
                                {body.contact.address.postalCode}
                            </p>
                            <p>
                                <strong>Telefon:</strong>
                                <br />
                                {body.contact.phone}
                            </p>
                            <p>
                                <strong>E-posta:</strong>
                                <br />
                                {body.contact.email}
                            </p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-4 md:p-8'>
                        <h2 className="text-2xl font-bold mb-4">İletişim Formu</h2>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </>
    );
}
