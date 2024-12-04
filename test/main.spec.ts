import { Parser } from '@asyncapi/parser';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import AsyncAPIDiff from '../src/asyncapidiff';
import { diff } from '../src';
import { OverrideObject } from '../src';

import {
  diffOutput,
  breakingChanges,
  nonBreakingChanges,
  overrides,
  changesWithOverrides,
  specDocument1,
  specDocument2,
  arrayChanges,
  YAMLArrayChanges,
  MarkdownArrayChanges,
  diffOutputV3,
} from './fixtures/main.fixtures';

const parser = new Parser();

describe('main function', () => {
  test('runs the diff function for spec v2', async () => {
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
    const output = diff(
      firstDocument.document?.json(),
      secondDocument.document?.json()
    );
    expect(output).toBeInstanceOf(AsyncAPIDiff);
    expect(output.getOutput()).toEqual(diffOutput);
    expect(output.breaking()).toEqual(breakingChanges);
    expect(output.nonBreaking()).toEqual(nonBreakingChanges);
  });

  test('throws on incompatible documents', async () => {
    const firstSpecDocument = readFileSync(
      resolve('./test/spec/asyncapi.yml'),
      'utf-8'
    );
    const secondSpecDocument = readFileSync(
      resolve('./test/spec/asyncapi-v3.yml'),
      'utf-8'
    );
    const firstDocument = await parser.parse(firstSpecDocument);
    const secondDocument = await parser.parse(secondSpecDocument);

    expect(() => diff(
      firstDocument.document?.json(),
      secondDocument.document?.json()
    )).toThrowError(
      new TypeError('diff between different AsyncAPI version is not allowed')
    );
  });

  test('runs the diff function for spec v3', async () => {
    const firstSpecDocument = readFileSync(
      resolve('./test/spec/asyncapi-v3.yml'),
      'utf-8'
    );
    const secondSpecDocument = readFileSync(
      resolve('./test/spec/asyncapi-v3-diff.yml'),
      'utf-8'
    );
    const firstDocument = await parser.parse(firstSpecDocument);
    const secondDocument = await parser.parse(secondSpecDocument);
    const output = diff(
      firstDocument.document?.json(),
      secondDocument.document?.json()
    );
    expect(output).toBeInstanceOf(AsyncAPIDiff);
    expect(output.getOutput()).toEqual(diffOutputV3);
  });

  test('runs the diff function with empty spec', () => {
    const firstSpec = {asyncapi: '2.1.0'};
    const secondSpec = {asyncapi: '2.1.0'};
    expect(diff(firstSpec, secondSpec).getOutput()).toEqual({
      changes: [],
    });
  });

  test('runs the diff function with overrided changes', async () => {
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
    const output = diff(
      firstDocument.document?.json(),
      secondDocument.document?.json(),
      {
        override: overrides as OverrideObject,
      }
    );
    expect(output.getOutput()).toEqual(changesWithOverrides);
  });

  test('checks output with array changes', () => {
    const output = diff(specDocument1, specDocument2);
    expect(output.getOutput()).toEqual(arrayChanges);
  });

  test('YAML: checks output with array changes', () => {
    const output = diff(specDocument1, specDocument2, { outputType: 'yaml' });
    expect(output.getOutput()).toEqual(YAMLArrayChanges);
  });

  test('Markdown: checks output with array changes', () => {
    const output = diff(specDocument1, specDocument2, {
      outputType: 'markdown',
    });
    expect(output.getOutput()).toEqual(MarkdownArrayChanges);
  });
});
