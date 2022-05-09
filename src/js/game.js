export const game = {
	jsDom: true,
	mode: "manual",
	type: "basic",
	types: {
		basic: {
			ROCK: ["SCISSORS"],
			PAPER: ["ROCK"],
			SCISSORS: ["PAPER"],
		},
		extended: {
			ROCK: ["SCISSORS", "LIZZARD"],
			PAPER: ["ROCK", "SPOCK"],
			SCISSORS: ["PAPER", "LIZZARD"],
			SPOCK: ["SCISSORS", "ROCK"],
			LIZZARD: ["SPOCK", "PAPER"],
		},
	},
	players: [
		{
			score: 0,
		},
		{
			score: 0,
		},
	],
};
