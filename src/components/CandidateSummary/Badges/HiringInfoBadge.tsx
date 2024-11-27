import { Typography } from '@mui/material';
import { HiringContentWrapper, HiringInfoValue } from './index.css';

type Props = {
	title: string;
	value: string;
};

const HiringInfoBadge = ({ title, value }: Props) => {
	return (
		<HiringContentWrapper>
			<Typography variant="h2">{title}</Typography>
			<HiringInfoValue variant="body1">{value}</HiringInfoValue>
		</HiringContentWrapper>
	);
};

export default HiringInfoBadge;
