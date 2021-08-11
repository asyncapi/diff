import AsyncAPIDiff from '../src/wrapper';

import {
  breakingChanges,
  inputDiff,
  nonbreakingChanges,
  unclassifiedChanges,
} from './fixtures/wrapper.fixture';

describe('AsyncAPIDiff wrapper', () => {
  test('checks the instance', () => {
    expect(new AsyncAPIDiff(JSON.stringify(inputDiff))).toBeInstanceOf(
      AsyncAPIDiff
    );
  });

  test('checks the original output', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff));
    expect(diff.json()).toEqual(inputDiff);
  });

  test('returns breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff));
    expect(diff.breaking()).toEqual(breakingChanges);
  });

  test('returns non-breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff));
    expect(diff.nonBreaking()).toEqual(nonbreakingChanges);
  });

  test('returns unclassified changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff));
    expect(diff.unclassified()).toEqual(unclassifiedChanges);
  });
});
