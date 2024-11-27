import { useQuery } from '@tanstack/react-query';
import fetcher from '../fetcher';
import { CandidateSummaryData } from '@api/types';

const candidateEndpoint = '/candidate/summary';

export const useCandidateInfo = () =>
	useQuery<CandidateSummaryData>({
		queryKey: [candidateEndpoint],
		queryFn: () => fetcher(candidateEndpoint),
	});
