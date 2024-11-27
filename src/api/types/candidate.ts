export type Skill = {
	name: string;
	relevant: boolean;
};

export type MainSkill = Skill & {
	years: string;
};

export type CandidateSummaryData = {
	summary: string;
	name: string;
	mainSkills: MainSkill[];
	additionalSkills: Skill[];
	achievements: string[];
	readyToStart: string;
	involvement: string;
	directHirePossible: string;
	availability: string;
};
