import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
});
