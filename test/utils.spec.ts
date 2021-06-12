import { isUrl, readDocument } from '../src/utils';

const outputFileString = `asyncapi: 2.0.0
info:
  title: My API
  version: '1.0.0'

channels:
  mychannel:
    publish:
      message:
        $ref: '#/components/messages/channelMessage'

components:
  messages:
    channelMessage:
      traits:
        - $ref: '#/components/messageTraits/extension'
    testMessage:
      traits:
        - $ref: '#/components/messageTraits/extension'
      payload:
        $ref: '#/components/schemas/testSchema'
  schemas:
    testSchema:
      type: object
      properties:
        name:
          type: string
  messageTraits:
    extension:
      x-some-extension: 'some extension'
      headers:
        type: object
        properties:
          some-common-header:
            type: string
`;

describe('Utils', () => {
  test('isUrl function', () => {
    expect(isUrl('https://www.asyncapi.com')).toBe(true);
    expect(isUrl('www.asyncapi.com')).toBe(false);
  });

  test('readDocument function', () => {
    expect(readDocument('./test/spec/asyncapi.yml')).toEqual(outputFileString);
  });
});
