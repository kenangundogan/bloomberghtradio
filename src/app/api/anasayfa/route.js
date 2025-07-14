import { NextResponse } from 'next/server';

export async function GET() {
    const data = {
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Anasayfa",
            description: "Anasayfa",
            keywords: "Anasayfa",
            image: {
                url: "/assets/images/share/default.jpg",
                width: 1920,
                height: 1005,
                type: "image/jpeg"
            },
            url: {
                host: "www.bloomberghtradyo.com",
                hostname: "bloomberghtradyo.com",
                href: "https://www.bloomberghtradyo.com",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com",
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
            relations: {
                programlar: {
                    title: "Programlar",
                    endpoint: "/programlar"
                },
                podcastler: {
                    title: "Podcastler",
                    endpoint: "/podcastler"
                },
                frekanslar: {
                    title: "Frekanslar",
                    endpoint: "/frekanslar"
                },
                yayinakisi: {
                    title: "Yayın Akışı",
                    endpoint: "/yayinakisi"
                }
            }
        }
    }

    return NextResponse.json(data);
} 