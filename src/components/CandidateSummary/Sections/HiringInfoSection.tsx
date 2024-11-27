import { HiringInfoWrapper } from '../index.css';
import { HiringInfoBadge } from '../Badges';
import { joinStrings } from '../utils';

type HiringInfoSectionProps = {
	availability: string;
	involvement: string;
	readyToStart: string;
	directHirePossible: string;
};

const HiringInfoSection = ({
	availability,
	involvement,
	readyToStart,
	directHirePossible,
}: HiringInfoSectionProps) => {
	const hiringInfoData = [
		{ title: 'Availability', value: joinStrings(availability, involvement) },
		{ title: 'Ready to start', value: readyToStart },
		{ title: 'Direct hire', value: directHirePossible },
	];

	return (
		<HiringInfoWrapper>
			{hiringInfoData.map((info) => (
				<HiringInfoBadge
					key={info.title}
					title={info.title}
					value={info.value}
				/>
			))}
		</HiringInfoWrapper>
	);
};

export default HiringInfoSection;
