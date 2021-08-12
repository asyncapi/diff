/* eslint-disable sonarjs/no-duplicate-string */

export const firstDocument = {
  servers: {
    production: {
      name: 'production',
      enum: [1, 2, 3],
    },
  },
};

export const secondDocument = {
  servers: {
    production: {
      name: 'production-dev',
      enum: [1, 2],
    },
  },
};

export const diffLocalOutput = [
  {
    action: 'remove',
    path: '/servers/production/enum/2',
    isArrayIndex: true,
    before: 3,
  },
  {
    action: 'edit',
    path: '/servers/production/name',
    before: 'production',
    after: 'production-dev',
  },
];
