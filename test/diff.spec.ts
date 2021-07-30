import diff from '../src/diff';
import { parser } from '../src/parser';

import { firstDocument, secondDocument, diffOutput } from './fixtures';

describe('Diff', () => {
  test('Check if diff is an empty array for same inputs', () => {
    expect(diff(firstDocument, firstDocument)).toStrictEqual([]);
  });

  test('Check diff output with local inputs', () => {
    expect(diff(firstDocument, secondDocument)).toStrictEqual([
      {
        action: 'remove',
        path: '/servers/production/enum/2',
        index: 2,
        before: 3,
      },
      {
        action: 'edit',
        path: '/servers/production/name',
        before: 'production',
        after: 'production-dev',
      },
    ]);
  });

  test('Check diff output through parser with no difference', async () => {
    const parsedData = await parser(
      './test/spec/asyncapi.yml',
      'https://raw.githubusercontent.com/asyncapi/parser-js/master/test/good/asyncapi-messages-channels.yml'
    );
    expect(
      diff(parsedData.firstDocument.json(), parsedData.secondDocument.json())
    ).toStrictEqual([]);
  });

  test('Check diff output through parser with no difference', async () => {
    const parsedData = await parser(
      './test/spec/asyncapi.yml',
      'https://raw.githubusercontent.com/asyncapi/parser-js/master/test/good/asyncapi-messages-channels.yml'
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
