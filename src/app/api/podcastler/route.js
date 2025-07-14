import { NextResponse } from 'next/server';
import { podcasts } from '@/data/podcasts';

export async function GET(request) {
    // URL'den program ID'sini al
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const programId = pathSegments.length > 3 ? parseInt(pathSegments[3]) : null;
    
    // Eğer program ID varsa, o programa ait podcast'leri filtrele
    const filteredPodcasts = programId 
        ? podcasts.filter(podcast => Number(podcast.programId) === programId)
        : podcasts;

    // Eğer program ID varsa ve podcast bulunamadıysa hata döndür
    if (programId && filteredPodcasts.length === 0) {
        return NextResponse.json({
            status: false,
            message: "Podcastler not found or invalid ID."
        }, { status: 404 });
    }

    return NextResponse.json({
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Podcastler",
            description: "Podcastler",
            keywords: "Podcastler",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Podcastler",
                        url: "/podcastler"
                    }
                ]
            },
            image: {
                url: "/assets/images/share/default.jpg",
                width: 1920,
                height: 1005,
                type: "image/jpeg"
            },
            url: {
                host: "www.bloomberghtradyo.com",
                hostname: "bloomberghtradyo.com",
                href: "https://www.bloomberghtradyo.com/podcastler",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/podcastler",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/podcastler",
            },
            tracking: {
                googleTagManagerID: "GTM-1234567890",
                googleAnalyticsID: "G-1234567890",
                gemiusID: "1234567890"
            },
            date: {
                created: "2025-04-04",
                updated: "2025-04-04",
                published: "2025-04-04"
            },
            generator: {
                datetime: "2025-04-04",
                ip: "127.0.0.1",
            }
        },
        body: {
            podcastler: filteredPodcasts
        }
    });
}

