import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { BadgeType } from '../types';
import { theme } from '@components/layout/theme';
import Badge from './GenericBadge';

export const HiringContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${theme.spacing(1)} ${theme.spacing(2)} 0 0;
	gap: ${theme.spacing(0.5)};
`;

export const HiringInfoValue = styled(Typography)`
	text-transform: uppercase;
`;

export const BadgeWrapper = styled(Box)`
	display: flex;
	padding: ${theme.spacing(1)};
	gap: ${theme.spacing(1)};
`;

const backgroundColors = {
	[BadgeType.RelevantSkill]: 'rgba(131 44 224 / 0.08)',
	[BadgeType.ComplementarySkill]: theme.palette.common.white,
	[BadgeType.Achievement]: 'rgba(41 182 246 / 0.08)',
};

export const StyledBadge = styled(Badge)<{
	type: BadgeType;
}>`
	background-color: ${({ type }) => backgroundColors[type]};
`;

const textColors = {
	[BadgeType.RelevantSkill]: theme.palette.primary.main,
	[BadgeType.ComplementarySkill]: theme.palette.secondary.main,
	[BadgeType.Achievement]: theme.palette.secondary.light,
};

export const InfoWrapper = styled(Box)<{
	type: BadgeType;
}>`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(1)};

	p {
		color: ${({ type }) => textColors[type]};
	}
`;
