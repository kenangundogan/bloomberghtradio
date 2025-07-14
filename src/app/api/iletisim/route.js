import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Burada e-posta gönderme işlemi yapılabilir
        // Örnek: await sendEmail({ name, email, subject, message });

        return NextResponse.json({
            success: true,
            message: 'Mesajınız başarıyla gönderildi.'
        });
    } catch (error) {
        console.error('Form gönderilirken hata oluştu:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    const data = {
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "İletişim",
            description: "İletişim",
            keywords: "İletişim, Site, Uygulama, Bilgi",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "İletişim",
                        url: "/iletisim"
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
                href: "https://www.bloomberghtradyo.com/kunye",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/kunye",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/kunye",
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
            contact: {
                address: {
                    street: "Kocatepe Mh. Abdülhakhamit Cad. No:25",
                    city: "Beyoğlu/İstanbul",
                    postalCode: "34000"
                },
                phone: "+90 (212) 313 60 00",
                email: "info@bloomberghtradyo.com",
            },
            map: {
                embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2697399858007!2d28.98117187739061!3d41.04122997134596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76f1a410483%3A0x5754b2d006da15d5!2sBloomberg%20HT%20TV!5e0!3m2!1str!2str!4v1743581665909!5m2!1str!2str",
                latitude: 41.0817,
                longitude: 29.0077
            }
        }
    };

    return NextResponse.json(data);
} 