export default function manifest() {
    return {
        name: 'Bloomberg HT Radyo',
        short_name: 'Bloomberg HT Radyo',
        description: 'Bloomberg HT Radyo - Güncel Ekonomi Haberleri ve Yorumlar',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/assets/images/manifest/72x72.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/128x128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: '/assets/images/manifest/512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        "screenshots": [
            {
                "src": "/assets/images/manifest/mobile.png",
                "sizes": "390x844",
                "type": "image/png",
                "form_factor": "narrow"
            },
            {
                "src": "/assets/images/manifest/desktop.png",
                "sizes": "1920x1080",
                "type": "image/png",
                "form_factor": "wide"
            }
        ]
    }
} 