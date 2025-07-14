import Featured from '@/app/(web)/components/Featured';
import Section from '@/app/(web)/components/Section';
import Heading from '@/app/(web)/components/Heading';
import Breadcrumb from '@/app/(web)/components/Breadcrumb';
import apiClient from '@/app/lib/apiClient';
import { cache } from 'react';
import { generateMetadata as createMetadata } from '@/app/(web)/layout/MetaData';

const getData = cache(async () => {
    return await apiClient('/kunye');
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
                <Heading name="Künye" icon='Info' />
            </Featured>
            <Section sectionName='kunye'>
                {/* Kuruluş Kimlik Bilgileri */}
                <div className="bg-gray-100 p-4 md:p-8 mb-8 text-black">
                    <h2 className="text-2xl font-bold mb-4">{body.company.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <p><strong>Şirket Adı:</strong> {body.company.data.name}</p>
                        <p><strong>Logo:</strong> {body.company.data.logo}</p>
                        <p><strong>Yayın Ortamı:</strong> {body.company.data.broadcastMedium}</p>
                        <p><strong>Lisans Türü:</strong> {body.company.data.licenseType}</p>
                        <p><strong>Yayın Türü:</strong> {body.company.data.broadcastType}</p>
                        <p><strong>Adres:</strong> {body.company.data.address}</p>
                        <p><strong>Telefon:</strong> {body.company.data.phone}</p>
                        <p><strong>Faks:</strong> {body.company.data.fax}</p>
                        <p><strong>Web Sitesi:</strong> {body.company.data.website}</p>
                        <p><strong>E-posta:</strong> {body.company.data.registeredEmail}</p>
                    </div>
                </div>
                {/* Temsilciler */}
                <div className="bg-gray-50 p-4 md:p-8 mb-8 text-black">
                    <h2 className="text-2xl font-bold mb-4">{body.representatives.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {body.representatives.data.map((representative, index) => (
                            <div key={index} className="pb-4">
                                <h3 className="text-xl font-semibold mb-2">{representative.title}</h3>
                                <p className="font-medium mb-2">{representative.name}</p>
                                <div className="space-y-2">
                                    <p><strong>Adres:</strong> {representative.contact.address}</p>
                                    <p><strong>Telefon:</strong> {representative.contact.phone}</p>
                                    <p><strong>E-posta:</strong> {representative.contact.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
