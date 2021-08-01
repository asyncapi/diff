import { join } from 'path';
import { parser } from '../src/parser';
import { outputJSONMessagesChannels } from './fixtures/parser.fixtures';

describe('Parser', () => {
  test('Check whether parser returns the expected output or not(relative path)', async () => {
    const parsedData = await parser(
      './test/spec/asyncapi.yml',
      'https://raw.githubusercontent.com/asyncapi/parser-js/master/test/good/asyncapi-messages-channels.yml'
    );

    expect(JSON.stringify(parsedData.firstDocument.json())).toEqual(
      outputJSONMessagesChannels
    );

    expect(JSON.stringify(parsedData.secondDocument.json())).toEqual(
      outputJSONMessagesChannels
    );
  });

  test('Check whether parser returns the expected output or not(absolute path)', async () => {
    const absPath = join(__dirname, 'spec', 'asyncapi.yml');
    const parsedData = await parser(
      absPath,
      'https://raw.githubusercontent.com/asyncapi/parser-js/master/test/good/asyncapi-messages-channels.yml'
    );

    expect(JSON.stringify(parsedData.firstDocument.json())).toEqual(
      outputJSONMessagesChannels
    );
    expect(JSON.stringify(parsedData.secondDocument.json())).toEqual(
      outputJSONMessagesChannels
    );
  });
});
