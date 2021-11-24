/* eslint-disable sonarjs/no-duplicate-string */
export const breakingChanges = [
  {
    action: 'remove',
    path: '/channels/mychannel',
    type: 'breaking',
    before: {
      publish: {
        message: {
          headers: {
            properties: {
              'some-common-header': {
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-2>',
              },
            },
            type: 'object',
            'x-parser-schema-id': '<anonymous-schema-1>',
          },
          schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
          'x-parser-message-name': 'channelMessage',
          'x-parser-message-parsed': true,
          'x-parser-original-traits': [
            {
              headers: {
                properties: {
                  'some-common-header': {
                    type: 'string',
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                },
                type: 'object',
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              'x-some-extension': 'some extension',
            },
          ],
          'x-some-extension': 'some extension',
        },
      },
    },
  },
  {
    action: 'edit',
    path: '/info/version',
    type: 'breaking',
    after: '1.1.0',
    before: '1.0.0',
  },
];

export const nonBreakingChanges = [
  {
    action: 'add',
    path: '/channels/anotherChannel',
    type: 'non-breaking',
    after: {
      publish: {
        message: {
          headers: {
            properties: {
              'some-common-header': {
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-2>',
              },
            },
            type: 'object',
            'x-parser-schema-id': '<anonymous-schema-1>',
          },
          schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
          'x-parser-message-name': 'channelMessage',
          'x-parser-message-parsed': true,
          'x-parser-original-traits': [
            {
              headers: {
                properties: {
                  'some-common-header': {
                    type: 'string',
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                },
                type: 'object',
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              'x-some-extension': 'some extension',
            },
          ],
          'x-some-extension': 'some extension',
        },
      },
    },
  },
];

export const diffOutput = {
  changes: [
    {
      action: 'remove',
      path: '/channels/mychannel',
      type: 'breaking',
      before: {
        publish: {
          message: {
            headers: {
              properties: {
                'some-common-header': {
                  type: 'string',
                  'x-parser-schema-id': '<anonymous-schema-2>',
                },
              },
              type: 'object',
              'x-parser-schema-id': '<anonymous-schema-1>',
            },
            schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
            'x-parser-message-name': 'channelMessage',
            'x-parser-message-parsed': true,
            'x-parser-original-traits': [
              {
                headers: {
                  properties: {
                    'some-common-header': {
                      type: 'string',
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                  },
                  type: 'object',
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                'x-some-extension': 'some extension',
              },
            ],
            'x-some-extension': 'some extension',
          },
        },
      },
    },
    {
      action: 'add',
      path: '/channels/anotherChannel',
      type: 'non-breaking',
      after: {
        publish: {
          message: {
            headers: {
              properties: {
                'some-common-header': {
                  type: 'string',
                  'x-parser-schema-id': '<anonymous-schema-2>',
                },
              },
              type: 'object',
              'x-parser-schema-id': '<anonymous-schema-1>',
            },
            schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
            'x-parser-message-name': 'channelMessage',
            'x-parser-message-parsed': true,
            'x-parser-original-traits': [
              {
                headers: {
                  properties: {
                    'some-common-header': {
                      type: 'string',
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                  },
                  type: 'object',
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                'x-some-extension': 'some extension',
              },
            ],
            'x-some-extension': 'some extension',
          },
        },
      },
    },
    {
      action: 'edit',
      path: '/info/version',
      type: 'breaking',
      after: '1.1.0',
      before: '1.0.0',
    },
  ],
};

export const overrides = {
  '/channels/*': {
    add: 'breaking',
    remove: 'non-breaking',
    edit: 'unclassified',
  },
  '/info/version': {
    add: 'breaking',
    remove: 'non-breaking',
    edit: 'unclassified',
  },
};

export const changesWithOverrides = {
  changes: [
    {
      action: 'remove',
      path: '/channels/mychannel',
      type: 'non-breaking',
      before: {
        publish: {
          message: {
            headers: {
              properties: {
                'some-common-header': {
                  type: 'string',
                  'x-parser-schema-id': '<anonymous-schema-2>',
                },
              },
              type: 'object',
              'x-parser-schema-id': '<anonymous-schema-1>',
            },
            schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
            'x-parser-message-name': 'channelMessage',
            'x-parser-message-parsed': true,
            'x-parser-original-traits': [
              {
                headers: {
                  properties: {
                    'some-common-header': {
                      type: 'string',
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                  },
                  type: 'object',
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                'x-some-extension': 'some extension',
              },
            ],
            'x-some-extension': 'some extension',
          },
        },
      },
    },
    {
      action: 'add',
      path: '/channels/anotherChannel',
      type: 'breaking',
      after: {
        publish: {
          message: {
            headers: {
              properties: {
                'some-common-header': {
                  type: 'string',
                  'x-parser-schema-id': '<anonymous-schema-2>',
                },
              },
              type: 'object',
              'x-parser-schema-id': '<anonymous-schema-1>',
            },
            schemaFormat: 'application/vnd.aai.asyncapi;version=2.0.0',
            'x-parser-message-name': 'channelMessage',
            'x-parser-message-parsed': true,
            'x-parser-original-traits': [
              {
                headers: {
                  properties: {
                    'some-common-header': {
                      type: 'string',
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                  },
                  type: 'object',
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                'x-some-extension': 'some extension',
              },
            ],
            'x-some-extension': 'some extension',
          },
        },
      },
    },
    {
      action: 'edit',
      path: '/info/version',
      type: 'unclassified',
      after: '1.1.0',
      before: '1.0.0',
    },
  ],
};

export const specDocument1 = {
  servers: {
    google: {
      variables: {
        port: {
          enum: [1, 2],
        },
      },
    },
  },
};

export const specDocument2 = {
  servers: {
    google: {
      variables: {
        port: {
          enum: [1],
        },
      },
    },
  },
};

export const arrayChanges = {
  changes: [
    {
      path: '/servers/google/variables/port/enum/1',
      type: 'breaking',
      isArrayIndex: true,
      action: 'remove',
      before: 2,
    },
  ],
};
