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

	test('makeText should return a string with the number of words less than or equal to the "numWords" parameter.', () => {
		expect(mm.makeText(2).split(" ").length).toBeLessThanOrEqual(2);
		expect(mm.makeText(5).split(" ").length).toBeLessThanOrEqual(5);
		expect(mm.makeText(20).split(" ").length).toBeLessThanOrEqual(20);
	});
});
