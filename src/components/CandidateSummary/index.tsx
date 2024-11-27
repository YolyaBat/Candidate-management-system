import { Typography } from '@mui/material';
import { SummaryWrapper, SkillsWrapper } from './index.css';
import { CandidateSummaryData } from '@api/types';
import SkillBadge from './SkillBadge';
import { SkillBadgeType } from './types';
import { useCandidateInfo } from '@api/hooks';

const CandidateSummary = () => {
	const { data, error } = useCandidateInfo();

	if (!data && !error) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}
	const { summary, mainSkills, additionalSkills, achievements } =
		data as CandidateSummaryData;

	return (
		<SummaryWrapper>
			<Typography variant="h1">Summary</Typography>
			<Typography variant="body1">{summary}</Typography>
			<Typography variant="h2">Main technologies</Typography>
			<SkillsWrapper>
				{mainSkills.map((mainSkill, index) => (
					<SkillBadge
						type={
							mainSkill.relevant
								? SkillBadgeType.RelevantSkill
								: SkillBadgeType.ComplementarySkill
						}
						key={`${mainSkill.name}${index}`}
					>
						<Typography variant="body1">{mainSkill.name}</Typography>
						<Typography variant="body1">{mainSkill.years}</Typography>
					</SkillBadge>
				))}
			</SkillsWrapper>
			<Typography variant="h2">Additional skills</Typography>
			<SkillsWrapper>
				{additionalSkills.map((skill, index) => (
					<SkillBadge
						type={
							skill.relevant
								? SkillBadgeType.RelevantSkill
								: SkillBadgeType.ComplementarySkill
						}
						key={`${skill.name}${index}`}
					>
						<Typography variant="body1">{skill.name}</Typography>
					</SkillBadge>
				))}
			</SkillsWrapper>
			<Typography variant="h2">Rewards and achievements</Typography>
			<SkillsWrapper>
				{achievements.map((achievement, index) => (
					<SkillBadge
						type={SkillBadgeType.Achievement}
						key={`${achievement}${index}`}
					>
						<Typography variant="body1">{achievement}</Typography>
					</SkillBadge>
				))}
			</SkillsWrapper>
		</SummaryWrapper>
	);
};

export default CandidateSummary;
