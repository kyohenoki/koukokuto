import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'koukokuto',
			fileName: 'koukokuto'
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'React'
				}
			}
		}
	}
})
