import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: '/api', // Proxy base path (because of CORS)
});

axiosInstance.defaults.headers.common['x-api-key'] =
	import.meta.env.VITE_API_KEY ?? '';

export default axiosInstance;
