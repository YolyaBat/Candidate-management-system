import { Typography } from '@mui/material';
import AchievementIconSrc from '@assets/star.svg';
import { BadgeType } from '../types';
import { StyledBadge, InfoWrapper } from './index.css';

const AchievementIcon = <img src={AchievementIconSrc} alt="Achievement Icon" />;

type AchievementBadgeProps = {
	value: string;
};

const AchievementBadge = ({ value }: AchievementBadgeProps) => (
	<StyledBadge icon={AchievementIcon} type={BadgeType.Achievement}>
		<InfoWrapper type={BadgeType.Achievement}>
			<Typography variant="body2">{value}</Typography>
		</InfoWrapper>
	</StyledBadge>
);

export default AchievementBadge;
