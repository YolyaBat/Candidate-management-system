import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from './theme';

const maxWidth = 800;

export const LayoutWrapper = styled(Box)`
	max-width: ${maxWidth}px;
	padding: ${theme.spacing(8)};
	justify-self: center;
`;
