import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// OPTION 1: If your GitHub username is valerielouisewilliams (two L's)
// but your repo is valerielouisewiliams.github.io (one L)
// Use this config:

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
  
  // Base path should be /repo-name/
  base: '/valerielouisewiliams.github.io/',
})
