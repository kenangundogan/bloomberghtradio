import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import { programs } from '@/data/programs';

export async function GET() {
    const getProgramsForDate = (date) => {
        return programs.map(program => {
            return {
                id: program.id,
                title: program.title,
                description: program.description,
                slug: program.slug,
                image: program.image,
                broadcast: program.broadcast,
                date: program.date,
                isActive: false,
                presenters: program.presenters
            };
        });
    };

    const today = new Date();
    const days = Array.from({ length: 7 }).map((_, i) => {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        return {
            date: date.toISOString().split('T')[0],
            dayName: date.toLocaleDateString('tr-TR', { weekday: 'long' }),
            formattedDate: date.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    });

    // Aktif günü belirle
    const activeDayIndex = faker.number.int({ min: 0, max: days.length - 1 });
    const activeDay = days[activeDayIndex].date;

    const data = days.map((day) => {
        const programs = getProgramsForDate(day.date);

        // Eğer bu gün aktif günse, aktif programı belirle
        if (day.date === activeDay) {
            const activeProgramIndex = faker.number.int({ min: 0, max: programs.length - 1 });
            programs[activeProgramIndex].isActive = true;
        }

        return {
            date: day.formattedDate,
            dayName: day.dayName,
            isActive: day.date === activeDay,
            programs: programs
        };
    });

    return NextResponse.json({
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Yayın Akışı",
            description: "Yayın Akışı",
            keywords: "Yayın Akışı",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Yayın Akışı",
                        url: "/yayinakisi"
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
                href: "https://www.bloomberghtradyo.com/yayinakisi",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/yayinakisi",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/yayinakisi",
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
        body: data
    });
}
