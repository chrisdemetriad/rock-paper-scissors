import { game } from "./game.js";

export const restart = () => {
	game.players[0].score = 0;
	game.players[1].score = 0;

	game.players[0].selection = "";
	game.players[1].selection = "";

	showButtons();
	update();
};

export const setMode = (event) => {
	game.mode = event.target.textContent;
	restart();
};

export const getTypes = () => {
	return game.types[game.type];
};

export const play = (event) => {
	const player1Selection = getSelection(event);
	const player2Selection = getSelection();

	setSelection(player1Selection, player2Selection);

	const result = getWinner(player1Selection, player2Selection);

	if (result === "win") {
		setScore(game.players[0]);
	} else if (result === "lose") {
		setScore(game.players[1]);
	}

	update();
};

const getSelection = (event) => {
	return event && game.mode === "manual" ? event.target.innerText : getRandomSelection();
};

const setSelection = (player1Selection, player2Selection) => {
	game.players[0].selection = player1Selection;
	game.players[1].selection = player2Selection;
};

export const setScore = (player) => {
	player.score++;
};

export const getRandomSelection = () => {
	const selections = Object.keys(getTypes());
	return selections[Math.floor(Math.random() * selections.length)];
};

export const getWinner = (player1Selection, player2Selection) => {
	const types = getTypes();
	// the check below seems unnecessary but it's to avoid a intermittent Uncaught TypeError
	const player1Won = types[player1Selection] && types[player1Selection].includes(player2Selection);
	const player2Won = types[player2Selection] && types[player2Selection].includes(player1Selection);

	if (player1Won) {
		return "win";
	} else if (player2Won) {
		return "lose";
	} else {
		return "tie";
	}
};

export const updateMarkup = (id, value) => {
	const element = document.getElementById(id);
	element.textContent = value || "";
};

const showButtons = () => {
	if (!game.jsDom) return;
	if (game.mode === "manual") {
		document.querySelector(".buttons").style.display = "block";
		document.getElementById("play").style.display = "none";
	} else {
		document.querySelector(".buttons").style.display = "none";
		document.getElementById("play").style.display = "block";
	}
};

const update = () => {
	if (!game.jsDom) return;
	game.players.forEach((player, i) => {
		const index = i + 1;
		updateMarkup("selection-" + index, player.selection);
		updateMarkup("score-" + index, player.score);
	});
};
