import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import fetcher from './api/fetcher';

import Layout from './components/layout/index.tsx';
import { theme } from './components/layout/theme.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<SWRConfig value={{ fetcher }}>
				<Layout />
			</SWRConfig>
		</ThemeProvider>
	</StrictMode>
);
