import diff from '../src/diff';

import {
  firstDocument,
  secondDocument,
  diffLocalOutput,
} from './fixtures/diff.fixtures';

describe('Diff', () => {
  test('Check if diff is an empty array for same inputs', () => {
    expect(diff(firstDocument, firstDocument)).toStrictEqual([]);
  });

  test('Check diff output with local inputs', () => {
    expect(diff(firstDocument, secondDocument)).toStrictEqual(diffLocalOutput);
  });
});
