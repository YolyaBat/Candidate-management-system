import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from '../../layout/theme';
import { SkillBadgeType } from '../types';

const backgroundColors = {
	[SkillBadgeType.RelevantSkill]: 'rgba(131 44 224 / 0.08)',
	[SkillBadgeType.ComplementarySkill]: theme.palette.common.white,
	[SkillBadgeType.Achievement]: 'rgba(41 182 246 / 0.08)',
};

export const SkillBadgeWrapper = styled(Box)<{
	type: SkillBadgeType;
}>`
	display: flex;
	background-color: ${({ type }) => backgroundColors[type]};
	padding: ${theme.spacing(1)};
`;

export const SkillInfoWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(1)};
`;
