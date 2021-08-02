import { Operation } from 'fast-json-patch';

import {
  formatAction,
  getBeforeValue,
  setIndex,
  formatDiffOutput,
} from '../../src/helpers/DiffHelpers';
import { DiffOutput } from '../../src/types';
import {
  firstDocument,
  diffAdd,
  diffAddOutput,
  diffRemove,
  diffRemoveOutput,
  diffEdit,
  diffEditOutput,
  modifyDiffInput,
} from '../fixtures/DiffHelpers.fixtures';

describe('Diff Helpers', () => {
  test('formatAction function', () => {
    expect(formatAction('add')).toBe('add');
    expect(formatAction('remove')).toBe('remove');
    expect(formatAction('replace')).toBe('edit');
  });

  test('getBeforeValue function', () => {
    expect(getBeforeValue(firstDocument, '/servers/production/name')).toBe(
      'production'
    );
  });

  test('setIndex function without array change', () => {
    const changeObject = {} as DiffOutput;
    setIndex(changeObject, firstDocument, '/servers');
    expect(changeObject).toStrictEqual({});
  });

  test('handlePath function with array change', () => {
    const changeObject = {} as DiffOutput;
    setIndex(changeObject, firstDocument, '/servers/production/enum/1');
    expect(changeObject).toStrictEqual({
      index: 1,
    });
  });
});

describe('formatDiffOutput function', () => {
  test('should return an empty array after passing empty diff', () => {
    expect(formatDiffOutput([], {})).toEqual([]);
  });

  test('using add operation', () => {
    expect(formatDiffOutput(diffAdd as Operation[], {})).toStrictEqual(
      diffAddOutput
    );
  });

  test('using remove operation', () => {
    expect(
      formatDiffOutput(diffRemove as Operation[], modifyDiffInput)
    ).toStrictEqual(diffRemoveOutput);
  });

  test('should throw error when firstDocuments is empty', () => {
    expect(() => formatDiffOutput(diffRemove as Operation[], {})).toThrowError(
      // eslint-disable-next-line quotes
      new TypeError("Cannot read property 'production' of undefined")
    );
  });

  test('using edit operation', () => {
    expect(
      formatDiffOutput(diffEdit as Operation[], modifyDiffInput)
    ).toStrictEqual(diffEditOutput);
  });
});
