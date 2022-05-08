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
