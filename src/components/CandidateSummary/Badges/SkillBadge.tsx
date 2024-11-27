import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { BadgeType } from '../types';
import { StyledBadge } from './index.css';

interface SkillBadgeProps {
	name: string;
	isRelevant: boolean;
	years?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, years, isRelevant }) => {
	const skillType = useMemo(
		() => (isRelevant ? BadgeType.RelevantSkill : BadgeType.ComplementarySkill),
		[isRelevant]
	);
	return (
		<StyledBadge type={skillType}>
			<Typography variant="body2">{name}</Typography>
			{years && <Typography variant="body2">{years}</Typography>}
		</StyledBadge>
	);
};

export default SkillBadge;
