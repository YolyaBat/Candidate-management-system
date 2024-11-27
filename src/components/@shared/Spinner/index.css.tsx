import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SpinnerWrapper = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;