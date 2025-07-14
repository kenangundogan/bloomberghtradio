import { Metadata } from 'next';

// Varsayılan metadata değerleri
export const defaultMetadata = {
    metadataBase: new URL('https://www.bloomberght.com.tr'),
    title: 'Bloomberg HT Radyo',
    description: 'Bloomberg HT Radyo, ekonomi ve finans dünyasından en güncel haberler, canlı yayınlar, podcastler ve uzman analizleri.',
    keywords: 'Bloomberg HT Radyo, ekonomi, finans, haber, canlı yayın, podcast',
    alternates: {
        canonical: 'https://www.bloomberght.com.tr'
    },
    openGraph: {
        type: 'website',
        images: {
            url: '/assets/images/share/default.jpg',
            width: 1920,
            height: 1005,
            type: 'image/jpeg'
        }
    }
};

// Sayfa bazlı metadata oluşturma fonksiyonu
export function generateMetadata({ title, description, keywords, alternates, openGraph } = {}) {
    // Sayfa başlığını oluştur
    const pageTitle = title ? `${title} - ${defaultMetadata.title}` : defaultMetadata.title;
    
    // Metadata nesnesini oluştur
    const metadata = {
        title: pageTitle,
        description: description || defaultMetadata.description,
        keywords: keywords || defaultMetadata.keywords,
        alternates: alternates || defaultMetadata.alternates,
        openGraph: {
            ...defaultMetadata.openGraph,
            title: pageTitle,
            description: description || defaultMetadata.description,
            images: {
                url: '/assets/images/share/default.jpg',
                width: 1920,
                height: 1005,
                type: 'image/jpeg'
            },
            ...openGraph
        }
    };
    
    return metadata;
}

export default defaultMetadata;

