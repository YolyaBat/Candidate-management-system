import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { theme } from '../layout/theme';

const HIGHLIGHT_COLOR = '#DCFF02';

export const PageHeader = styled(Box)`
	display: flex;
	justify-content: space-between;
`;

export const PageTitle = styled(Typography)`
	position: relative;
	display: inline-block;
	width: fit-content;

	&::after {
		content: '';
		position: absolute;
		left: -3px;
		right: -3px;
		bottom: 0.08rem;
		height: ${theme.spacing(1.75)};
		background-color: ${HIGHLIGHT_COLOR};
		width: calc(100% + 6px);
		z-index: -1;
	}
`;

export const HintWrapper = styled(Box)`
	display: flex;
	align-items: center;
	gap: ${theme.spacing(0.5)};

	p {
		color: ${theme.palette.info.main};
	}
`;

export const SummaryWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(4)};
`;

export const SectionWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(2)};
`;

export const SkillsWrapper = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	gap: ${theme.spacing(1)};
`;

export const HiringInfoWrapper = styled(Box)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${theme.spacing(2)};
	width: 100%;
`;
