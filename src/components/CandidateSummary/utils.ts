import { MainSkill, Skill } from '@api/types';

export const sortSkillsByRelevance = (skills: MainSkill[] | Skill[]) =>
	skills.sort((skillA, skillB) => {
		if (skillA.relevant === skillB.relevant) {
			return 0;
		}
		return skillA.relevant ? -1 : 1;
	});

export const joinStrings = (stringA: string, stringB: string) =>
	`${stringA}, ${stringB}`;
