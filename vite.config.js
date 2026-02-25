import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: '/qurbana/',
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/*.svg'],
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
                        handler: 'StaleWhileRevalidate',
                        options: { cacheName: 'google-fonts-stylesheets' }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-webfonts',
                            expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 }
                        }
                    }
                ]
            },
            manifest: {
                name: 'Syro-Malabar Qurbana',
                short_name: 'Qurbana',
                description: 'The Holy Qurbana — Syro-Malabar Rite',
                theme_color: '#0d0d0d',
                background_color: '#0d0d0d',
                display: 'standalone',
                start_url: '/',
                icons: [
                    { src: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
                    { src: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' }
                ]
            }
        })
    ]
})
