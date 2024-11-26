import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from '../layout/theme';

export const SummaryWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(4)};
`;
