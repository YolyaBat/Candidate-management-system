const fetcher = async (endpoint: string) => {
	const url = `/api${endpoint}`; // TODO: remove proxy after the CORS issue is resolved

	const response = await fetch(url, {
		headers: {
			'x-api-key': import.meta.env.VITE_API_KEY ?? '',
		},
	});

	if (!response.ok) {
		throw new Error(`Error: ${response.statusText}`);
	}

	return response.json();
};

export default fetcher;
