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
			ROCK: ["SCISSORS", "LIZARD"],
			PAPER: ["ROCK", "SPOCK"],
			SCISSORS: ["PAPER", "LIZARD"],
			LIZARD: ["SPOCK", "PAPER"],
			SPOCK: ["SCISSORS", "ROCK"],
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
