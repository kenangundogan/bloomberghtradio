import { NextResponse } from 'next/server';
import { programs } from '@/data/programs';

export async function GET() {

    return NextResponse.json({
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Programlar",
            description: "Programlar",
            keywords: "Programlar",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Programlar",
                        url: "/programlar"
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
                href: "https://www.bloomberghtradyo.com/programlar",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/programlar",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/programlar",
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
            programlar: programs
        }
    });
}
