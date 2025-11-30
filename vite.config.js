import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { execSync } from 'child_process'
import fs from 'fs'

const versionJsonPlugin = () => {
  return {
    name: 'version-json',
    writeBundle() {
      try {
        const commitMsg = execSync('git log -1 --format=%s').toString().trim()
        const date = new Date().toISOString()
        fs.writeFileSync('dist/version.json', JSON.stringify({ message: commitMsg, date }))
        console.log(`Generated version.json with message: "${commitMsg}"`)
      } catch (e) {
        console.error('Failed to generate version.json', e)
        fs.writeFileSync('dist/version.json', JSON.stringify({ message: 'New Update Available', date: new Date().toISOString() }))
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    versionJsonPlugin(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'B.Tech Exam Prep',
        short_name: 'BTechPrep',
        description: 'Complete B.Tech Exam Preparation App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  base: '/mobile-computing-prep/',
})
