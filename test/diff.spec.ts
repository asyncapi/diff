import diff from '../src/diff';
import { parser } from '../src/parser';

import {
  firstDocument,
  secondDocument,
  diffLocalOutput,
  diffOutput,
} from './fixtures/diff.fixtures';

describe('Diff', () => {
  test('Check if diff is an empty array for same inputs', () => {
    expect(diff(firstDocument, firstDocument)).toStrictEqual([]);
  });

  test('Check diff output with local inputs', () => {
    expect(diff(firstDocument, secondDocument)).toStrictEqual(diffLocalOutput);
  });

  test('Check diff output through parser with no difference', async () => {
    const parsedData = await parser(
      './test/spec/asyncapi.yml',
      './test/spec/asyncapi.yml'
    );
    expect(
      diff(parsedData.firstDocument.json(), parsedData.secondDocument.json())
    ).toStrictEqual([]);
  });

  test('Check diff output through parser with difference input', async () => {
    const parsedData = await parser(
      './test/spec/asyncapi.yml',
      './test/spec/diffSpec.yml'
    );
    expect(
      diff(parsedData.firstDocument.json(), parsedData.secondDocument.json())
    ).toStrictEqual(diffOutput);
  });
});
