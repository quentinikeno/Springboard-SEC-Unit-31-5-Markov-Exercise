/** Textual markov chain generator */

class MarkovMachine {
	/** build markov machine; read in text.*/

	constructor(text) {
		let words = text.split(/[ \r\n]+/);
		this.words = words.filter((c) => c !== "");
		this.makeChains();
	}

	/** set markov chains:
	 *
	 *  for text of "the cat in the hat", chains will be
	 *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	makeChains() {
		// TODO
		let chains = new Object();
		this.words.forEach((word, index) => {
			let nextWord;
			if (!(word in chains)) {
				chains[word] = [];
			}
			nextWord =
				index + 1 === this.words.length ? null : this.words[index + 1];
			// check if the next word is already in the array for "word"
			let duplicate = chains[word].some((value) => value === nextWord);
			if (!duplicate) {
				chains[word].push(nextWord);
			}
		});
		return chains;
	}

	/** return random text from chains */
	randElement(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	makeText(numWords = 100) {
		// TODO
		let text = [];
		let chains = this.makeChains();
		text.push(this.randElement(this.words));
		for (let i = 1; i < numWords; i++) {
			let nextWord = this.randElement(chains[text[i - 1]]);
			if (nextWord !== null) {
				text.push(nextWord);
			} else {
				break;
			}
		}
		return text.join(" ");
	}
}

module.exports = { MarkovMachine };
