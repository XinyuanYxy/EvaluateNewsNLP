import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit funcitonality', () => {
	test('testing the handleSubmit()', () => {
		expect(handleSubmit(undefined)).toBeDefined();
	});
});
