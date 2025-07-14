import { NextResponse } from 'next/server';
import { findProgramById } from '@/data/programs';
import { findPodcastsByProgramId } from '@/data/podcasts';

export async function GET(request, { params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const programId = parseInt(id);
    const program = findProgramById(programId);

    if (!program) {
        return NextResponse.json(
            {
                status: false,
                message: 'Program bulunamadı',
                statusCode: 404
            }
        );
    }

    const programPodcasts = findPodcastsByProgramId(programId);

    return NextResponse.json(
        {
            extras: {
                version: "1.0.0",
                language: "tr_TR",
                siteName: "Bloomberg HT Radyo",
                title: `${program.title} - Podcastler`,
                description: `${program.title} programına ait podcastler`,
                keywords: program.keywords,
                image: {
                    url: "/assets/images/share/default.jpg",
                    width: 1920,
                    height: 1005,
                    type: "image/jpeg"
                },
                url: {
                    host: "www.bloomberghtradyo.com",
                    hostname: "bloomberghtradyo.com",
                    href: `https://www.bloomberghtradyo.com/${program.url}/podcastler`,
                    origin: "https://www.bloomberghtradyo.com",
                    pathname: `${program.url}/podcastler`,
                    port: "",
                    protocol: "https",
                    url: `https://www.bloomberghtradyo.com/${program.url}/podcastler`,
                },
                tracking: {
                    googleTagManagerID: "GTM-1234567890",
                    googleAnalyticsID: "G-1234567890",
                    gemiusID: "1234567890"
                },
                date: {
                    created: new Date().toISOString(),
                    updated: new Date().toISOString(),
                    published: new Date().toISOString()
                },
                generator: {
                    datetime: new Date().toISOString(),
                    ip: "127.0.0.1",
                }
            },
            body: {
                program: program,
                podcastler: programPodcasts
            }
        }
    )
} 