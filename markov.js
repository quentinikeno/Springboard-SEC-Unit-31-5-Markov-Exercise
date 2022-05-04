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
			chains[word].push(nextWord);
		});
		return chains;
	}

	/** return random text from chains */

	makeText(numWords = 100) {
		// TODO
	}
}

module.exports = { MarkovMachine };
