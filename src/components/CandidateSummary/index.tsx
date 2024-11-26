import { Typography } from '@mui/material';
import useSWR from 'swr';

import { SummaryWrapper } from './index.css';

const CandidateSummary = () => {
	const { data, error } = useSWR('/api/candidate/summary');

	if (!data && !error) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}

	return (
		<SummaryWrapper>
			<Typography variant="h1">Summary</Typography>
		</SummaryWrapper>
	);
};

export default CandidateSummary;
