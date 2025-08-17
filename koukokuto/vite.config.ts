import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [dts({ rollupTypes: true })],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@uragawa': resolve(__dirname, '../uragawa/src')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'koukokuto',
			fileName: 'koukoku'
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
