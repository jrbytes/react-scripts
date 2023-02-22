/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { InlineConfig } from 'vitest'
import tsconfigPaths from 'vite-tsconfig-paths'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  plugins: [react(), tsconfigPaths()],
} as VitestConfigExport)
