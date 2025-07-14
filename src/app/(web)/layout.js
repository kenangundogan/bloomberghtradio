import { Geist, Geist_Mono } from "next/font/google";
import "@/app/style/globals.css";
import FixVH from '@/app/(web)/layout/FixVH';
import Header from '@/app/(web)/layout/Header';
import Footer from '@/app/(web)/layout/Footer';
import RadioPlayerWrapper from '@/app/(web)/components/RadioPlayerWrapper';
import CookiePolicy from '@/app/(web)/components/CookiePolicy';
import ScrollToTop from '@/app/(web)/layout/ScrollToTop';
import apiClient from '@/app/lib/apiClient';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

async function getGeneralData() {
    try {
        const data = await apiClient('/general');
        return data;
    } catch (error) {
        console.error('General data alınırken hata oluştu:', error);
        return {
            menu: [],
            radioStream: null,
            social: [],
            store: [],
            copyright: "© 2024 Bloomberg HT Radyo"
        };
    }
}

export default async function RootLayout({ children }) {
    const generalData = await getGeneralData();

    return (
        <html lang="tr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <FixVH />
                <Header menu={generalData.menu} />
                <RadioPlayerWrapper radioStream={generalData.radioStream} />
                <main data-type="main" className="bg-white">
                    {children}
                </main>
                <Footer
                    menu={generalData.menu}
                    social={generalData.social}
                    store={generalData.store}
                    copyright={generalData.copyright}
                />
                <CookiePolicy />
                <ScrollToTop />
            </body>
        </html>
    );
}
