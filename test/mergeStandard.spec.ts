import { mergeStandard, OverrideObject } from '../src/mergeStandard';
import { standard } from '../src/standard';
import {
  newKey,
  exisitngKey,
  standardAsString,
  mergedStandardAsString,
  exisitingKeyStandard,
} from './mergeStandard.fixture';

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
