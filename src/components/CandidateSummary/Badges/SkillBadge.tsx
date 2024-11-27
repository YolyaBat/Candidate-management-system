import { Typography } from '@mui/material';
import { BadgeType } from '../types';
import { StyledBadge, InfoWrapper } from './index.css';

type SkillBadgeProps = {
	name: string;
	isRelevant: boolean;
	years?: string;
};

const SkillBadge = ({ name, years, isRelevant }: SkillBadgeProps) => {
	const skillType = isRelevant
		? BadgeType.RelevantSkill
		: BadgeType.ComplementarySkill;

	return (
		<StyledBadge type={skillType}>
			<InfoWrapper type={skillType}>
				<Typography variant="body2">{name}</Typography>
				{years && <Typography variant="body2">{years}</Typography>}
			</InfoWrapper>
		</StyledBadge>
	);
};

export default SkillBadge;
