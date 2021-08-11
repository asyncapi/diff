import categorizeChanges from '../src/categorizeChanges';
import { DiffOutput } from '../src/types';

import {
  standard,
  inputDiffOutput,
  finalDiffOutput,
  finalDiffOutputAsUnclassified,
} from './fixtures/categorizeChanges.fixtures';

describe('categorizeChanges', () => {
  test('checks the final output', () => {
    expect(
      categorizeChanges(standard, inputDiffOutput as DiffOutput[])
    ).toStrictEqual(finalDiffOutput);
  });

  test('returns unclassified when passed with empty standard', () => {
    expect(
      categorizeChanges({}, inputDiffOutput as DiffOutput[])
    ).toStrictEqual(finalDiffOutputAsUnclassified);
  });
});
