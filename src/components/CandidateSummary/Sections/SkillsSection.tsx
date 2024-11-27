import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { SkillsWrapper, SectionWrapper } from '../index.css';
import SkillBadge from '../Badges/SkillBadge';
import { MainSkill, Skill } from '@api/types';
import { sortSkillsByRelevance } from '../utils';

type SkillsSectionProps = {
	title: string;
	skills: MainSkill[] | Skill[];
};

const SkillsSection = ({ title, skills }: SkillsSectionProps) => {
	const sortedSkills = useMemo(() => sortSkillsByRelevance(skills), [skills]);

	return (
		<SectionWrapper>
			<Typography variant="h2">{title}</Typography>
			<SkillsWrapper>
				{sortedSkills.map((skill, index) => (
					<SkillBadge
						key={`${skill.name} ${index}`}
						name={skill.name}
						years={
							!!(skill as MainSkill)?.years ? (skill as MainSkill).years : ''
						}
						isRelevant={skill.relevant}
					/>
				))}
			</SkillsWrapper>
		</SectionWrapper>
	);
};

export default SkillsSection;
