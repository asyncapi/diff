import { Parser } from '@asyncapi/parser';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import generateDiff from '../src/generateDiff';

import {
  firstDocument,
  secondDocument,
  diffLocalOutput,
  diffOutput,
} from './fixtures/diff.fixtures';

const parser = new Parser();

describe('Diff', () => {
  test('Check if diff is an empty array for same inputs', () => {
    expect(generateDiff(firstDocument, firstDocument)).toStrictEqual([]);
  });

  test('Check diff output with local inputs', () => {
    expect(generateDiff(firstDocument, secondDocument)).toStrictEqual(
      diffLocalOutput
    );
  });

  test('Check diff output through parser with no difference', async () => {
    const specDocument = readFileSync(
      resolve('./test/spec/asyncapi.yml'),
      'utf-8'
    );
    const firstDocument = await parser.parse(specDocument);
    expect(
      generateDiff(
        firstDocument.document?.json(),
        firstDocument.document?.json()
      )
    ).toStrictEqual([]);
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
    const firstDocument = await parser.parse(firstSpecDocument);
    const secondDocument = await parser.parse(secondSpecDocument);
    expect(
      generateDiff(
        firstDocument.document?.json(),
        secondDocument.document?.json()
      )
    ).toStrictEqual(diffOutput);
  });

  test('Check diff output with circular references through parser', async () => {
    const specDocument = readFileSync(
      resolve('./test/spec/asyncapi-v3-circular.yml'),
      'utf-8'
    );
    const first = await parser.parse(specDocument);
    const second = await parser.parse(
      specDocument.replace('type: string', 'type: number')
    );
    expect(
      generateDiff(first.document?.json(), first.document?.json())
    ).toStrictEqual([]);
    expect(
      generateDiff(first.document?.json(), second.document?.json())
    ).toEqual(
      expect.arrayContaining([
        {
          action: 'edit',
          path: '/channels/entities/messages/entityCreated/payload/properties/filters/items/anyOf/1/type',
          before: 'string',
          after: 'number',
        },
      ])
    );
  });
});
