import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from './theme';

const MAX_WIDTH = 800;

export const LayoutWrapper = styled(Box)`
	max-width: ${MAX_WIDTH}px;
	margin: 0 auto;
	padding: ${theme.spacing(2)};

	${theme.breakpoints.up('sm')} {
		padding: ${theme.spacing(8)};
	}
`;
