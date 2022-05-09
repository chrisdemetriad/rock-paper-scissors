import { game } from "../src/js/game.js";
import { setMode, restart, setType, getTypes, getWinner, setScore, getRandomSelection } from "../src/js/logic";

beforeEach(() => {
	game.jsDom = false;
	restart();
});

test("Should start with score from 0", () => {
	expect(game.players[0].score).toBe(0);
	expect(game.players[1].score).toBe(0);
});

test("setMode() should change the game mode", () => {
	let event = {
		target: {
			textContent: "manual",
		},
	};
	setMode(event);
	expect(game.mode).toBe("manual");

	event = {
		target: {
			textContent: "auto",
		},
	};
	setMode(event);
	expect(game.mode).toBe("auto");
});

test("setType() should correctly set the game type", () => {
	let event = {
		target: {
			textContent: "basic",
		},
	};
	setType(event);
	expect(game.type).toBe("basic");
	expect(getTypes()).toStrictEqual({
		ROCK: ["SCISSORS"],
		PAPER: ["ROCK"],
		SCISSORS: ["PAPER"],
	});

	event = {
		target: {
			textContent: "extended",
		},
	};
	setType(event);
	expect(game.type).toBe("extended");
	expect(getTypes()).toStrictEqual({
		ROCK: ["SCISSORS", "LIZZARD"],
		PAPER: ["ROCK", "SPOCK"],
		SCISSORS: ["PAPER", "LIZZARD"],
		LIZZARD: ["SPOCK", "PAPER"],
		SPOCK: ["SCISSORS", "ROCK"],
	});
});

test("getRandomSelection() should return a string match", () => {
	expect(getRandomSelection()).not.toBeUndefined();
	expect(getRandomSelection()).toMatch(/ROCK|PAPER|SCISSORS|LIZZARD|SPOCK/);
});

// types
test("getWinner() should get the right value", () => {
	expect(getWinner("ROCK", "SCISSORS")).toBe("win");
	expect(getWinner("PAPER", "PAPER")).toBe("tie");
	expect(getWinner("SCISSORS", "ROCK")).toBe("lose");
	game.type = "extended";
	expect(getWinner("ROCK", "SPOCK")).toBe("lose");
	expect(getWinner("PAPER", "LIZZARD")).toBe("lose");
	expect(getWinner("SCISSORS", "LIZZARD")).toBe("win");
	expect(getWinner("LIZZARD", "LIZZARD")).toBe("tie");
	expect(getWinner("SPOCK", "SCISSORS")).toBe("win");
});

test("setScore() should increment score", () => {
	const player1 = game.players[0];
	const player2 = game.players[1];

	setScore(player1);
	expect(player1.score).toBe(1);
	expect(player2.score).toBe(0);

	setScore(player1);
	expect(player1.score).toBe(2);
	expect(player2.score).toBe(0);
});
