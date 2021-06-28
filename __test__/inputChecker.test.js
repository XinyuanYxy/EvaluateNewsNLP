import { checkForInput } from '../src/client/js/inputChecker';

describe('testing user validation function', () => {
	test('testing checkForInput', () => {
		expect(checkForInput('https://www.sparknotes.com/lit/gatsby/summary/')).toBe(
			true
		);
	});
});
