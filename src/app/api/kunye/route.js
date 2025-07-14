import { NextResponse } from 'next/server';

export async function GET() {
    const data = {
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Künye",
            description: "Künye",
            keywords: "Künye, Site, Uygulama, Bilgi",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Künye",
                        url: "/kunye"
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
            company: {
                type: "company",
                title: "Kuruluş Kimlik Bilgileri",
                status: "active",
                data: {
                    name: "C Görsel Yayınlar A.Ş.",
                    logo: "BLOOMBERG HT RADYO",
                    broadcastMedium: "U-TV, K-TV",
                    licenseType: "U-RD, R1",
                    broadcastType: "Genel",
                    address: "Abdülhakhamit Cad. No: 25 Beyoğlu/İstanbul",
                    phone: "0212 313 60 00",
                    fax: "0212 313 74 22",
                    website: "www.bloomberghtradyo.com",
                    registeredEmail: "cgorsel@hs03.kep.tr"
                }
            },
            representatives: {
                type: "representatives",
                title: "Temsilciler",
                status: "active",
                data: [
                    {
                        title: "Sorumlu Müdür",
                        name: "Ekrem Koray BERKİN",
                        contact: {
                            address: "Abdülhakhamit Cad. No: 25 Beyoğlu/İstanbul",
                            phone: "0212 313 60 00",
                            email: "kberkin@bloomberght.com"
                        }
                    },
                    {
                        title: "İzleyici Temsilcisi",
                        name: "Ekrem Koray BERKİN",
                        contact: {
                            address: "Abdülhakhamit Cad. No: 25 Beyoğlu/İstanbul",
                            phone: "0212 313 60 00",
                            email: "izleyicitemsilcisi@bloomberght.com"
                        }
                    }
                ]
            }
        }
    }

    return NextResponse.json(data);
} 