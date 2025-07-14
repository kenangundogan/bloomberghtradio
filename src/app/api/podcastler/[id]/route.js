import { NextResponse } from 'next/server';
import { podcasts } from '@/data/podcasts';

export async function GET(request, { params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const numericId = id ? parseInt(id) : null;

    // Eğer id varsa, ilgili podcast'i bul
    const podcast = numericId 
        ? podcasts.find(podcast => Number(podcast.id) === numericId)
        : null;

    // Eğer id varsa ve podcast bulunamadıysa hata döndür.
    if (numericId && !podcast) {
        return NextResponse.json({
            status: false,
            message: "Podcast bulunamadı veya geçersiz ID."
        }, { status: 404 });
    }

    return NextResponse.json({
        status: true,
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: podcast ? podcast.title : "Podcastler",
            description: podcast ? podcast.description : "Podcastler",
            keywords: podcast ? podcast.title : "Podcastler",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Podcastler",
                        url: "/podcastler"
                    },
                    {
                        name: podcast ? podcast.title : "Podcastler",
                        url: `/podcastler/${podcast.id}`
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
                href: `https://www.bloomberghtradyo.com/podcastler/${podcast.id}`,
                origin: "https://www.bloomberghtradyo.com",
                pathname: podcast ? `/podcastler/${podcast.id}` : "/podcastler",
                port: "",
                protocol: "https",
                url: `https://www.bloomberghtradyo.com/podcastler/${podcast.id}`,
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
            podcast,
            relations: {
                podcastler: {
                    title: "Podcastler",
                    endpoint: `/programlar/${podcast.programId}/podcastler`
                }
            }
        }
    });
}
