import { NextResponse } from 'next/server';
import { programs, findProgramById } from '@/data/programs';

export async function GET(request, { params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const program = findProgramById(parseInt(id));


    if (!program) {
        return NextResponse.json(
            { 
                status: false,
                message: 'Program bulunamadı',
                statusCode: 404
            }
        );
    }
    return NextResponse.json(
        {
            extras: {
                version: "1.0.0",
                language: "tr_TR",
                siteName: "Bloomberg HT Radyo",
                title: program.title,
                description: program.description,
                keywords: program.keywords,
                breadcrumb: {
                    items: [
                        {
                            name: "Anasayfa",
                            url: "/"
                        },
                        {
                            name: "Programlar",
                            url: "/programlar"
                        },
                        {
                            name: program.title,
                            url: `/programlar/${program.id}`
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
                    href: `https://www.bloomberghtradyo.com/${program.url}`,
                    origin: "https://www.bloomberghtradyo.com",
                    pathname: program.url,
                    port: "",
                    protocol: "https",
                    url: `https://www.bloomberghtradyo.com/${program.url}`,
                },
                tracking: {
                    googleTagManagerID: "GTM-1234567890",
                    googleAnalyticsID: "G-1234567890",
                    gemiusID: "1234567890"
                },
                date: {
                    created: program.date.createdAt,
                    updated: program.date.updatedAt,
                    published: program.date.publishedAt
                },
                generator: {
                    datetime: program.date.publishedAt,
                    ip: "127.0.0.1",
                }
            },
            body: {
                program: program,
                relations: {
                    podcastler: {
                        title: "Podcastler",
                        endpoint: `/programlar/${program.id}/podcastler`
                    },
                    programlar: {
                        title: "Programlar",
                        endpoint: "/programlar"
                    }
                }
            }
        }
    )
}
