import { setMode, setType, play, restart } from "./logic";
import "../css/index.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

const start = () => {
	const playButton = document.getElementById("play");
	const restartButton = document.getElementById("restart");
	const buttons = document.querySelector(".buttons");
	const mode = document.querySelector(".mode");
	const type = document.querySelector(".type");

	playButton.addEventListener("click", play);
	restartButton.addEventListener("click", restart);
	buttons.addEventListener("click", play);
	mode.addEventListener("click", setMode);
	type.addEventListener("click", setType);

	restart();
};

if (window.addEventListener) {
	document.addEventListener("DOMContentLoaded", start, false);
} else if (window.attachEvent) {
	document.attachEvent("onDOMContentLoaded", start);
}
