import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#832CE014',
			light: '#63a4ff',
			dark: '#004ba0',
		},
		secondary: {
			main: '#832CE0',
		},
		common: {
			black: '#000',
			white: '#fff',
		},
	},
	typography: {
		fontFamily: 'Outfit, sans-serif',
		h1: {
			fontSize: '2rem',
			fontWeight: 600,
			lineHeight: '2.5rem',
			letterSpacing: '0.025rem',
		},
		h2: {
			fontSize: '1.375rem',
			fontWeight: 600,
			color: grey[900],
		},
		body1: {
			fontSize: '1rem',
		},
		body2: {
			fontSize: '0.875rem',
		},
	},
	spacing: 8,
});
