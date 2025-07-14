import { NextResponse } from 'next/server';

export async function GET() {
    const menu = [
        {
            label: "Programlar",
            href: "/programlar",
            header: true,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Podcastler",
            href: "/podcastler",
            header: true,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Yayın Akışı",
            href: "/yayinakisi",
            header: true,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Frekanslar",
            href: "/frekanslar",
            header: true,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "TV",
            href: "https://www.bloomberght.com/tv",
            header: true,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Künye",
            href: "/kunye",
            header: false,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "İletişim",
            href: "/iletisim",
            header: false,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Kullanım Koşulları",
            href: "/kullanim-kosullari",
            header: false,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Çerez Politikası",
            href: "/cerez-politikasi",
            header: false,
            footer: true,
            megamenu: true,
            status: true
        },
        {
            label: "Aydınlatma Metni",
            href: "/aydinlatma-metni",
            header: false,
            footer: true,
            megamenu: true,
            status: true
        }
    ];

    const social = [
        { platform: "facebook", href: "https://facebook.com/bloomberghtradyo" },
        { platform: "twitter", href: "https://twitter.com/bloomberghtradyo" },
        { platform: "instagram", href: "https://instagram.com/bloomberghtradyo" },
        { platform: "youtube", href: "https://youtube.com/bloomberghtradyo" }
    ];

    const store = [
        { platform: "apple", href: "https://apps.apple.com/app/id1043743200" },
        { platform: "google", href: "https://play.google.com/store/apps/details?id=com.pordiva.bloombergtvradio" }
    ];

    const copyright = "Bloomberg HT Radyo © 2025. Tüm Hakları Saklıdır.";

    const radioStream = {
        title: "Bloomberg HT Radyo",
        description: "Bloomberg HT Radyo Canlı Yayın",
        src: "https://bloomberghtradyo.radyotvonline.net/bloomberghtradyo",
        image: "/assets/images/radio/1x1.jpg"
    };

    return NextResponse.json({
        menu,
        social,
        store,
        copyright,
        radioStream
    });
}
