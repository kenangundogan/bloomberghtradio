import { Geist, Geist_Mono } from "next/font/google";
import "@/app/style/globals.css";
import FixVH from '@/app/(web)/layout/FixVH';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function RootLayout({ children }) {

    return (
        <html lang="tr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <FixVH />
                <main data-type="main" className="bg-white">
                    {children}
                </main>
            </body>
        </html>
    );
}
