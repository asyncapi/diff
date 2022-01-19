import AsyncAPIDiff from '../src/asyncapidiff';

import {
  breakingChanges,
  inputDiff,
  nonbreakingChanges,
  unclassifiedChanges,
  YAMLBreakingChanges,
  YAMLNonbreakingChanges,
  YAMLOutputDiff,
  YAMLUnclassifiedChanges,
} from './fixtures/asyncapidiff.fixtures';

describe('AsyncAPIDiff wrapper', () => {
  test('checks the instance', () => {
    expect(new AsyncAPIDiff(JSON.stringify(inputDiff), 'json')).toBeInstanceOf(
      AsyncAPIDiff
    );
  });

  test('JSON: checks the original output', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.getOutput()).toEqual(inputDiff);
  });

  test('JSON: returns breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.breaking()).toEqual(breakingChanges);
  });

  test('JSON: returns non-breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.nonBreaking()).toEqual(nonbreakingChanges);
  });

  test('JSON: returns unclassified changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'json');
    expect(diff.unclassified()).toEqual(unclassifiedChanges);
  });

  test('YAML: checks the original output', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'yaml');
    expect(diff.getOutput()).toEqual(YAMLOutputDiff);
  });

  test('YAML: returns breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'yaml');
    expect(diff.breaking()).toEqual(YAMLBreakingChanges);
  });

  test('YAML: returns non-breaking changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'yaml');
    expect(diff.nonBreaking()).toEqual(YAMLNonbreakingChanges);
  });

  test('YAML: returns unclassified changes', () => {
    const diff = new AsyncAPIDiff(JSON.stringify(inputDiff), 'yaml');
    expect(diff.unclassified()).toEqual(YAMLUnclassifiedChanges);
  });
});
