import { parse } from '@asyncapi/parser';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import diff from '../src/diff';

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
    const specDocument = readFileSync(
      resolve('./test/spec/asyncapi.yml'),
      'utf-8'
    );
    const firstDocument = await parse(specDocument);
    expect(diff(firstDocument.json(), firstDocument.json())).toStrictEqual([]);
  });

  test('Check diff output through parser with difference input', async () => {
    const firstSpecDocument = readFileSync(
      resolve('./test/spec/asyncapi.yml'),
      'utf-8'
    );
    const secondSpecDocument = readFileSync(
      resolve('./test/spec/diffSpec.yml'),
      'utf-8'
    );
    const firstDocument = await parse(firstSpecDocument);
    const secondDocument = await parse(secondSpecDocument);
    expect(diff(firstDocument.json(), secondDocument.json())).toStrictEqual(
      diffOutput
    );
  });
});
