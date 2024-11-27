import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import fetcher from './api/axiosInstance.ts';

import Layout from './components/layout/index.tsx';
import { theme } from './components/layout/theme.ts';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: ({ queryKey }) => {
				const [endpoint] = queryKey as [string];
				return fetcher(endpoint);
			},
			staleTime: 60000,
			refetchOnWindowFocus: false,
		},
	},
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Layout />
			</QueryClientProvider>
		</ThemeProvider>
	</StrictMode>
);
