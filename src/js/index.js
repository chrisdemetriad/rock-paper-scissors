import { setMode, play, restart } from "./logic";
import "../css/index.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

const start = () => {
	const playButton = document.getElementById("play");
	const restartButton = document.getElementById("restart");
	const buttons = document.querySelector(".buttons");
	const mode = document.querySelector(".mode");

	playButton.addEventListener("click", play);
	restartButton.addEventListener("click", restart);
	buttons.addEventListener("click", play);
	mode.addEventListener("click", setMode);

	restart();
};

if (window.addEventListener) {
	document.addEventListener("DOMContentLoaded", start, false);
} else if (window.attachEvent) {
	document.attachEvent("onDOMContentLoaded", start);
}
