import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// USE THIS IF: Your GitHub username is valerielouisewilliams (TWO L's)
// but repo is valerielouisewiliams.github.io (ONE L)

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
  
  // Base must include the repo name as a subdirectory
  base: '/valerielouisewiliams.github.io/',
})
