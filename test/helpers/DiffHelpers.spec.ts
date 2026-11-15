import { Operation } from 'fast-json-patch';

import {
  formatAction,
  getBeforeValue,
  removeCircularReferences,
  setIndex,
  formatDiffOutput,
  getDocumentMajorVersion,
  incompatibleDocuments,
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
      isArrayIndex: true,
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
      new TypeError("Cannot read properties of undefined (reading 'production')")
    );
  });

  test('using edit operation', () => {
    expect(
      formatDiffOutput(diffEdit as Operation[], modifyDiffInput)
    ).toStrictEqual(diffEditOutput);
  });
});

describe('between different asyncapi version', () => {
  test('should return correct asyncapi major version', () => {
    expect(getDocumentMajorVersion({asyncapi: '3.0.0'})).toEqual('3');
  });

  test('documents are incompatible', () => {
    expect(incompatibleDocuments({asyncapi: '3.0.0'}, {asyncapi: '2.1.0'})).toBeTruthy();
  });

  test('documents are compatible', () => {
    expect(incompatibleDocuments({asyncapi: '3.0.0'}, {asyncapi: '3.0.0'})).toBeFalsy();
  });
});

describe('removeCircularReferences', () => {
  test('replaces references back to an ancestor and keeps shared ones', () => {
    const shared = { type: 'string' };
    const node: any = { a: shared, b: shared };
    node.items = [node];
    expect(removeCircularReferences(node)).toStrictEqual({
      a: { type: 'string' },
      b: { type: 'string' },
      items: ['[Circular /]'],
    });
  });

  test('names the ancestor, so redirecting a recursive reference is a change', () => {
    const a: any = {};
    const b: any = {};
    a.child = b;
    b.child = a;
    const toA = removeCircularReferences(a);
    b.child = b;
    expect(toA).toStrictEqual({ child: { child: '[Circular /]' } });
    expect(removeCircularReferences(a)).toStrictEqual({
      child: { child: '[Circular /child]' },
    });
  });

  test('escapes keys in the JSON pointer', () => {
    const node: any = {};
    node['a/b~c'] = { back: node, self: null };
    node['a/b~c'].self = node['a/b~c'];
    expect(removeCircularReferences(node)).toStrictEqual({
      'a/b~c': { back: '[Circular /]', self: '[Circular /a~1b~0c]' },
    });
  });
});
