import {
  DiffOutput,
  formatAction,
  getBeforeValue,
  setIndex,
} from '../../src/helpers/DiffHelpers';

import { firstDocument } from '../fixtures';

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
