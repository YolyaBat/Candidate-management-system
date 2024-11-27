import React from 'react';

import { SkillBadgeType } from '../types';
import { SkillBadgeWrapper, SkillInfoWrapper } from './index.css';

type Props = {
	type: SkillBadgeType;
	icon?: React.ReactNode;
	children: React.ReactNode;
};

const SkillBadge: React.FC<Props> = ({ type, icon, children }) => {
	return (
		<SkillBadgeWrapper type={type}>
			{icon}
			<SkillInfoWrapper>{children}</SkillInfoWrapper>
		</SkillBadgeWrapper>
	);
};

export default SkillBadge;
