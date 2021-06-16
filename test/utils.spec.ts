import { isUrl, readDocument } from '../src/utils';
import { AsyncAPIDoc } from './fixtures';

describe('Utils', () => {
  test('isUrl function', () => {
    expect(isUrl('https://www.asyncapi.com')).toBe(true);
    expect(isUrl('www.asyncapi.com')).toBe(false);
    expect(() => isUrl('https://')).toThrow('Invalid URL: https://');
  });

  test('readDocument function', () => {
    expect(readDocument('./test/spec/asyncapi.yml')).toEqual(AsyncAPIDoc);
  });
});
