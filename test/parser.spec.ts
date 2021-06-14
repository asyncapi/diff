import { parser } from '../src/parser';

const outputJSONMessagesChannels =
  '{"asyncapi":"2.0.0","info":{"title":"My API","version":"1.0.0"},"channels":{"mychannel":{"publish":{"message":{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string","x-parser-schema-id":"<anonymous-schema-2>"}},"x-parser-schema-id":"<anonymous-schema-1>"},"x-parser-original-traits":[{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string"}}}}],"schemaFormat":"application/vnd.aai.asyncapi;version=2.0.0","x-parser-message-parsed":true,"x-parser-message-name":"channelMessage"}}}},"components":{"messages":{"channelMessage":{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string","x-parser-schema-id":"<anonymous-schema-2>"}},"x-parser-schema-id":"<anonymous-schema-1>"},"x-parser-original-traits":[{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string"}}}}],"schemaFormat":"application/vnd.aai.asyncapi;version=2.0.0","x-parser-message-parsed":true,"x-parser-message-name":"channelMessage"},"testMessage":{"payload":{"type":"object","properties":{"name":{"type":"string","x-parser-schema-id":"<anonymous-schema-3>"}},"x-parser-schema-id":"testSchema"},"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string","x-parser-schema-id":"<anonymous-schema-5>"}},"x-parser-schema-id":"<anonymous-schema-4>"},"x-parser-original-traits":[{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string"}}}}],"x-parser-original-schema-format":"application/vnd.aai.asyncapi;version=2.0.0","x-parser-original-payload":{"type":"object","properties":{"name":{"type":"string"}}},"schemaFormat":"application/vnd.aai.asyncapi;version=2.0.0","x-parser-message-parsed":true,"x-parser-message-name":"testMessage"}},"schemas":{"testSchema":{"type":"object","properties":{"name":{"type":"string","x-parser-schema-id":"<anonymous-schema-3>"}},"x-parser-schema-id":"testSchema"}},"messageTraits":{"extension":{"x-some-extension":"some extension","headers":{"type":"object","properties":{"some-common-header":{"type":"string"}}}}}},"x-parser-spec-parsed":true}';

describe('Parser', () => {
  test('Check whether parser returns the expected output or not', async () => {
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
});
