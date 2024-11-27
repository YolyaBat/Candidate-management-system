import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	server: {
		host: 'localhost',
		port: 3000,
		proxy: {
			// TODO: remove proxy after the CORS issue is resolved
			'/api': {
				target: 'https://test-task-mock-api.onrender.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, 'src/components'),
			'@api': resolve(__dirname, 'src/api'),
			'@assets': resolve(__dirname, 'src/assets'),
		},
	},
});
