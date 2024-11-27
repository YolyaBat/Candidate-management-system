import axiosInstance from './axiosInstance';

const fetcher = async (endpoint: string, params?: Record<string, any>) => {
	try {
		const response = await axiosInstance.get(`/api${endpoint}`, { params });
		return response.data;
	} catch (error: any) {
		const message = `Status: ${
			error.response?.statusText || 'unknown'
		}; Message: ${error.message || 'unknown'}`;
		throw new Error(message);
	}
};

export default fetcher;
