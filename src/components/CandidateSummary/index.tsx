import { Typography } from '@mui/material';
import { CandidateSummaryData } from '@api/types';
import { useCandidateInfo } from '@api/hooks';
import AlertIconPath from '@assets/alert.svg';
import Spinner from '@components/@shared/Spinner';

import {
	SummaryWrapper,
	PageHeader,
	PageTitle,
	HintWrapper,
} from './index.css';
import {
	SkillsSection,
	AchievementsSection,
	HiringInfoSection,
} from './Sections';

const alertIcon = <img src={AlertIconPath} alt="Alert icon" />;

const CandidateSummary = () => {
	const { data, error } = useCandidateInfo();

	if (!data && !error) {
		return <Spinner />;
	}

	if (error) {
		return <div>Error</div>;
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

	return (
		<SummaryWrapper>
			<PageHeader>
				<PageTitle variant="h1">Summary</PageTitle>
				<HintWrapper>
					{alertIcon}
					<Typography variant="body2">
						Relevant skills are highlighted
					</Typography>
				</HintWrapper>
			</PageHeader>
			<Typography variant="body1">{summary}</Typography>
			<SkillsSection title="Main technologies" skills={mainSkills} />
			<SkillsSection title="Additional skills" skills={additionalSkills} />
			<AchievementsSection achievements={achievements} />
			<HiringInfoSection
				availability={availability}
				involvement={involvement}
				readyToStart={readyToStart}
				directHirePossible={directHirePossible}
			/>
		</SummaryWrapper>
	);
};

export default CandidateSummary;
