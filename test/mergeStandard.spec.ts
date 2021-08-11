import { mergeStandard } from '../src/mergeStandard';
import { OverrideObject } from '../src/types';
import { standard } from '../src/standard';

import {
  newKey,
  exisitngKey,
  standardAsString,
  mergedStandardAsString,
  exisitingKeyStandard,
} from './fixtures/mergeStandard.fixture';

describe('mergeStandard()', () => {
  test('with empty override object', () => {
    mergeStandard(standard, {});
    expect(JSON.stringify(standard)).toBe(standardAsString);
  });

  test('with new override key', () => {
    mergeStandard(standard, newKey as OverrideObject);
    expect(JSON.stringify(standard)).toBe(mergedStandardAsString);
  });

  test('with exisiting override key', () => {
    mergeStandard(standard, exisitngKey as OverrideObject);
    expect(JSON.stringify(standard)).toBe(exisitingKeyStandard);
  });
});
