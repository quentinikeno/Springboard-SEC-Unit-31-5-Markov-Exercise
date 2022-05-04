/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov");
const axios = require("axios");
const fs = require("fs");
const argv = process.argv;
const type = `${argv[argv.length - 2]}`;
const path = `${argv[argv.length - 1]}`;

function checkIfURL(string) {
	try {
		url = new URL(string);
		return true;
	} catch (error) {
		return false;
	}
}

function readFile(filename) {
	try {
		return fs.readFileSync(filename, "utf8");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

async function getURL(url) {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

async function printText() {
	if (type === "file") {
		// Read file
		const content = readFile(path);
		const mm = new MarkovMachine(content);
		console.log(mm.makeText());
	} else if (type === "url") {
		// axios get url
		if (checkIfURL(path)) {
			let content = await getURL(path);
			const mm = new MarkovMachine(content);
			console.log(mm.makeText());
		} else {
			console.error("Can't read URL.");
			process.exit(1);
		}
	} else {
		console.error("Please specify the correct file type.");
		process.exit(1);
	}
}

printText();
