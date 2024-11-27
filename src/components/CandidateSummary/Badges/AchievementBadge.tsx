import React from 'react';
import { Typography } from '@mui/material';
import AchievementIconSrc from '@assets/star.svg';
import { BadgeType } from '../types';
import { StyledBadge } from './index.css';

const AchievementIcon = <img src={AchievementIconSrc} alt="Achievement Icon" />;

interface AchievementBadgeProps {
	value: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ value }) => (
	<StyledBadge icon={AchievementIcon} type={BadgeType.Achievement}>
		<Typography variant="body2">{value}</Typography>
	</StyledBadge>
);

export default AchievementBadge;
