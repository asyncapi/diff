import AsyncAPIDiff from '../src/asyncapidiff';

import {
  breakingChanges,
  inputDiff,
  nonbreakingChanges,
  unclassifiedChanges,
} from './fixtures/asyncapidiff.fixtures';

describe('AsyncAPIDiff wrapper', () => {
  test('checks the instance', () => {
    expect(new AsyncAPIDiff(JSON.stringify(inputDiff), 'json')).toBeInstanceOf(
      AsyncAPIDiff
    );
  });

  test('checks the original output', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.getOutput()).toEqual(inputDiff);
  });

  test('returns breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.breaking()).toEqual(breakingChanges);
  });

  test('returns non-breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.nonBreaking()).toEqual(nonbreakingChanges);
  });

  test('returns unclassified changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.unclassified()).toEqual(unclassifiedChanges);
  });
});
