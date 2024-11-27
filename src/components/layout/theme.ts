import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#832CE0',
		},
		secondary: {
			main: '#212121',
			light: '#1D7FAC',
		},
		common: {
			black: '#000',
			white: '#fff',
		},
		info: {
			main: 'rgb(0 0 0 / 0.38)',
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
			fontWeight: 400,
			color: grey[900],
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			color: grey[900],
		},
	},
	spacing: 8,
});
