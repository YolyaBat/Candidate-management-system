import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from './theme';

const MAX_WIDTH = 800;

export const LayoutWrapper = styled(Box)`
	max-width: ${MAX_WIDTH}px;
	padding: ${theme.spacing(8)};
	margin: 0 auto;
`;
