import { NextResponse } from 'next/server';

export async function GET() {
    const data = {
        extras: {
            version: "1.0.0",
            language: "tr_TR",
            siteName: "Bloomberg HT Radyo",
            title: "Frekanslar",
            description: "Frekanslar",
            keywords: "Frekanslar",
            breadcrumb: {
                items: [
                    {
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        name: "Frekanslar",
                        url: "/frekanslar"
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
                href: "https://www.bloomberghtradyo.com/frekanslar",
                origin: "https://www.bloomberghtradyo.com",
                pathname: "/frekanslar",
                port: "",
                protocol: "https",
                url: "https://www.bloomberghtradyo.com/frekanslar",
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
            frekanslar: [
                {
                    city: "Adana",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Adana"
                },
                {
                    city: "Adıyaman",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Adıyaman"
                },
                {
                    city: "Afyonkarahisar",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Afyonkarahisar"
                },
                {
                    city: "Ağrı",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Ağrı"
                },
                {
                    city: "Amasya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Amasya"
                },
                {
                    city: "Ankara",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Ankara"
                },
                {
                    city: "Antalya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Antalya"
                },
                {
                    city: "Artvin",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Artvin"
                },
                {
                    city: "Aydın",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Aydın"
                },
                {
                    city: "Balıkesir",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Balıkesir"
                },
                {
                    city: "Bilecik",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Bilecik"
                },
                {
                    city: "Bingöl",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Bingöl"
                },
                {
                    city: "Bitlis",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Bitlis"
                },
                {
                    city: "Bolu",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Bolu"
                },
                {
                    city: "Burdur",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Burdur"
                },
                {
                    city: "Bursa",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Bursa"
                },
                {
                    city: "Çanakkale",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Çanakkale"
                },
                {
                    city: "Çankırı",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Çankırı"
                },
                {
                    city: "Çorum",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Çorum"
                },
                {
                    city: "Denizli",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Denizli"
                },
                {
                    city: "Diyarbakır",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Diyarbakır"
                },
                {
                    city: "Düzce",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Düzce"
                },
                {
                    city: "Edirne",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Edirne"
                },
                {
                    city: "Elazığ",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Elazığ"
                },
                {
                    city: "Erzincan",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Erzincan"
                },
                {
                    city: "Erzurum",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Erzurum"
                },
                {
                    city: "Eskişehir",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Eskişehir"
                },
                {
                    city: "Gaziantep",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Gaziantep"
                },
                {
                    city: "Giresun",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Giresun"
                },
                {
                    city: "Gümüşhane",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Gümüşhane"
                },
                {
                    city: "Hakkari",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Hakkari"
                },
                {
                    city: "Hatay",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Hatay"
                },
                {
                    city: "Iğdır",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Iğdır"
                },
                {
                    city: "Isparta",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Isparta"
                },
                {
                    city: "İstanbul",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo İstanbul"
                },
                {
                    city: "İzmir",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo İzmir"
                },
                {
                    city: "Kahramanmaraş",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kahramanmaraş"
                },
                {
                    city: "Karabük",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Karabük"
                },
                {
                    city: "Karaman",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Karaman"
                },
                {
                    city: "Kars",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kars"
                },
                {
                    city: "Kastamonu",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kastamonu"
                },
                {
                    city: "Kayseri",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kayseri"
                },
                {
                    city: "Kırıkkale",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kırıkkale"
                },
                {
                    city: "Kırklareli",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kırklareli"
                },
                {
                    city: "Kırşehir",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kırşehir"
                },
                {
                    city: "Kilis",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kilis"
                },
                {
                    city: "Kocaeli",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kocaeli"
                },
                {
                    city: "Konya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Konya"
                },
                {
                    city: "Kütahya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Kütahya"
                },
                {
                    city: "Malatya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Malatya"
                },
                {
                    city: "Manisa",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Manisa"
                },
                {
                    city: "Mardin",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Mardin"
                },
                {
                    city: "Mersin",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Mersin"
                },
                {
                    city: "Muğla",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Muğla"
                },
                {
                    city: "Muş",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Muş"
                },
                {
                    city: "Nevşehir",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Nevşehir"
                },
                {
                    city: "Niğde",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Niğde"
                },
                {
                    city: "Ordu",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Ordu"
                },
                {
                    city: "Osmaniye",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Osmaniye"
                },
                {
                    city: "Rize",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Rize"
                },
                {
                    city: "Sakarya",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Sakarya"
                },
                {
                    city: "Samsun",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Samsun"
                },
                {
                    city: "Siirt",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Siirt"
                },
                {
                    city: "Sinop",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Sinop"
                },
                {
                    city: "Sivas",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Sivas"
                },
                {
                    city: "Şanlıurfa",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Şanlıurfa"
                },
                {
                    city: "Şırnak",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Şırnak"
                },
                {
                    city: "Tekirdağ",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Tekirdağ"
                },
                {
                    city: "Tokat",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Tokat"
                },
                {
                    city: "Trabzon",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Trabzon"
                },
                {
                    city: "Tunceli",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Tunceli"
                },
                {
                    city: "Uşak",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Uşak"
                },
                {
                    city: "Van",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Van"
                },
                {
                    city: "Yalova",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Yalova"
                },
                {
                    city: "Yozgat",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Yozgat"
                },
                {
                    city: "Zonguldak",
                    frequency: "92.8",
                    description: "Bloomberg HT Radyo Zonguldak"
                }
            ]
        }
    };

    return NextResponse.json(data);
} 