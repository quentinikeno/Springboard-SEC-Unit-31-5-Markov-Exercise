const { MarkovMachine } = require("./markov");

describe("Test MarkovMachine class.", () => {
	let mm;
	beforeEach(() => {
		mm = new MarkovMachine("the cat in the hat");
	});

	test("makeChains should return an object of word chains.", () => {
		const chains = {
			the: ["cat", "hat"],
			cat: ["in"],
			in: ["the"],
			hat: [null],
		};
		expect(mm.makeChains()).toEqual(chains);
	});

	test("makeText should return a string", () => {
		expect(mm.makeText()).toEqual(expect.any(String));
	});
});
