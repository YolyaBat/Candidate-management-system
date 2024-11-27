import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box, colors } from '@mui/material';

import { BadgeType } from '../types';
import { theme } from '@components/layout/theme';
import Badge from './GenericBadge';

const RELEVANT_SKILL_BACKGROUND = 'rgba(131 44 224 / 0.08)';
const ACHIEVEMENT_BACKGROUND = 'rgba(41 182 246 / 0.08)';

export const HiringContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${theme.spacing(1)} ${theme.spacing(2)} 0 0;
	gap: ${theme.spacing(0.5)};
`;

export const HiringInfoValue = styled(Typography)`
	text-transform: uppercase;
	line-height: ${theme.spacing(2.75)};
`;

export const BadgeWrapper = styled(Box)`
	display: flex;
	padding: ${theme.spacing(1)};
	gap: ${theme.spacing(1)};
`;

const backgroundColors = {
	[BadgeType.RelevantSkill]: RELEVANT_SKILL_BACKGROUND,
	[BadgeType.ComplementarySkill]: theme.palette.common.white,
	[BadgeType.Achievement]: ACHIEVEMENT_BACKGROUND,
};

const borderColors = {
	[BadgeType.RelevantSkill]: theme.palette.primary.main,
	[BadgeType.ComplementarySkill]: colors.grey[600],
	[BadgeType.Achievement]: theme.palette.secondary.light,
};

const textColors = {
	...borderColors,
	[BadgeType.ComplementarySkill]: theme.palette.secondary.main,
};

export const StyledBadge = styled(Badge)<{
	type: BadgeType;
}>`
	background-color: ${({ type }) => backgroundColors[type]};
	border: 1px dashed ${({ type }) => borderColors[type]};
	padding: ${({ type }) =>
		type !== BadgeType.Achievement &&
		`${theme.spacing(1)} ${theme.spacing(1.5)}`};
`;

export const InfoWrapper = styled(Box)<{
	type: BadgeType;
}>`
	p {
		color: ${({ type }) => textColors[type]};
	}
`;
