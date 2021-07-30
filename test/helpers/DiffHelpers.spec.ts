import {
  DiffOutput,
  formatAction,
  getBeforeValue,
  handlePath,
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

  test('handlePath function without array change', () => {
    const changeObject = {} as DiffOutput;
    handlePath(changeObject, '/servers');
    expect(changeObject).toStrictEqual({
      path: '/servers',
    });
  });

  test('handlePath function with array change', () => {
    const changeObject = {} as DiffOutput;
    handlePath(changeObject, '/servers/production/tags/10');
    expect(changeObject).toStrictEqual({
      path: '/servers/production/tags',
      index: 10,
    });
  });
});
