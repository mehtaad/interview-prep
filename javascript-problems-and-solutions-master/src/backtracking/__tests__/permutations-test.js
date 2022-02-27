import { assert } from 'chai';
import permute from '../permutations';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Permutations', () => {
  const testCases = [[[1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]]];

  testCases.forEach((testCase, index) => {
    it(`should get the permutations using back tracking ${index}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = permute(nums);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
