import { Typography } from '@mui/material';
import {
	PageHeader,
	PageTitle,
	HintWrapper,
	SummaryWrapper,
	SkillsWrapper,
	HiringInfoWrapper,
} from './index.css';
import { CandidateSummaryData } from '@api/types';
import { useCandidateInfo } from '@api/hooks';
import AlertIconSrc from '@assets/alert.svg';
import HiringInfoBadge from './Badges/HiringInfoBadge';
import { AchievementBadge, SkillBadge } from './Badges';

const alertIcon = <img src={AlertIconSrc} alt="Alert Icon" />;

const CandidateSummary = () => {
	const { data, isError, isLoading } = useCandidateInfo();

	if (isLoading && !isError) {
		return <></>;
	}

	const {
		summary,
		mainSkills,
		additionalSkills,
		achievements,
		availability,
		involvement,
		readyToStart,
		directHirePossible,
	} = data as CandidateSummaryData;

	const hiringInfoData = [
		{ title: 'Availability', value: `${availability}, ${involvement}` },
		{ title: 'Ready to start', value: readyToStart },
		{ title: 'Direct hire', value: directHirePossible },
	];

	return (
		<SummaryWrapper>
			<PageHeader>
				<PageTitle variant="h1">Summary</PageTitle>
				<HintWrapper>
					{alertIcon}
					<Typography variant="body1">
						Relevant skills are highlighted
					</Typography>
				</HintWrapper>
			</PageHeader>
			<Typography variant="body1">{summary}</Typography>
			<Typography variant="h2">Main technologies</Typography>
			<SkillsWrapper>
				{mainSkills.map((mainSkill, index) => (
					<SkillBadge
						key={`${mainSkill.name}${index}`}
						name={mainSkill.name}
						years={mainSkill.years}
						isRelevant={mainSkill.relevant}
					/>
				))}
			</SkillsWrapper>
			<Typography variant="h2">Additional skills</Typography>
			<SkillsWrapper>
				{additionalSkills.map((skill, index) => (
					<SkillBadge
						key={`${skill.name}${index}`}
						name={skill.name}
						isRelevant={skill.relevant}
					/>
				))}
			</SkillsWrapper>
			<Typography variant="h2">Rewards and achievements</Typography>
			<SkillsWrapper>
				{achievements.map((achievement) => (
					<AchievementBadge key={achievement} value={achievement} />
				))}
			</SkillsWrapper>
			<HiringInfoWrapper>
				{hiringInfoData.map((info) => (
					<HiringInfoBadge
						key={info.title}
						title={info.title}
						value={info.value}
					/>
				))}
			</HiringInfoWrapper>
		</SummaryWrapper>
	);
};

export default CandidateSummary;
