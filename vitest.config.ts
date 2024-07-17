import { defineConfig, defaultExclude } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

 
export default defineConfig({
  plugins: [tsconfigPaths(),react()],
  test: {
    exclude:[
      ...defaultExclude,
      'tests/*'
    ],
    environment: 'jsdom',
  },
})