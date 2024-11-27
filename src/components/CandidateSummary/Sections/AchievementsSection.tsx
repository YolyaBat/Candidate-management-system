import { Typography } from '@mui/material';
import { SkillsWrapper, SectionWrapper } from '../index.css';
import { AchievementBadge } from '../Badges';

type AchievementsSectionProps = {
	achievements: string[];
};

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => (
	<SectionWrapper>
		<Typography variant="h2">Rewards and achievements</Typography>
		<SkillsWrapper>
			{achievements.filter(Boolean).map((achievement) => (
				<AchievementBadge key={achievement} value={achievement} />
			))}
		</SkillsWrapper>
	</SectionWrapper>
);

export default AchievementsSection;
