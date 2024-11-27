import React from 'react';
import { BadgeWrapper } from './index.css';

type Props = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	className?: string;
};

const GenericBadge: React.FC<Props> = ({ icon, className, children }) => (
	<BadgeWrapper className={className}>
		{icon}
		<div>{children}</div>
	</BadgeWrapper>
);

export default GenericBadge;
