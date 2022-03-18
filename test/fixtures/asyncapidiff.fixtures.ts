export const inputDiff = {
  changes: [
    {
      type: 'breaking',
      path: '/servers',
    },
    {
      type: 'non-breaking',
      path: '/channels',
    },
    {
      type: 'unclassified',
      path: '/info',
    },
  ],
};

export const breakingChanges = [
  {
    type: 'breaking',
    path: '/servers',
  },
];

export const nonbreakingChanges = [
  {
    type: 'non-breaking',
    path: '/channels',
  },
];

export const unclassifiedChanges = [
  {
    type: 'unclassified',
    path: '/info',
  },
];

export const YAMLOutputDiff = `changes:
  - type: breaking
    path: /servers
  - type: non-breaking
    path: /channels
  - type: unclassified
    path: /info
`;

export const YAMLBreakingChanges = `- type: breaking
  path: /servers
`;

export const YAMLNonbreakingChanges = `- type: non-breaking
  path: /channels
`;

export const YAMLUnclassifiedChanges = `- type: unclassified
  path: /info
`;

export const MarkdownOutputDiff = `## Breaking


 - **Path**: \`/servers\`
    

## Non-breaking


 - **Path**: \`/channels\`
    

## Unclassified


 - **Path**: \`/info\`
    
`;

export const MarkdownBreakingChanges = `## Breaking


 - **Path**: \`/servers\`
    
`;

export const MarkdownNonbreakingChanges = `## Non-breaking


 - **Path**: \`/channels\`
    
`;

export const MarkdownUnclassifiedChanges = `## Unclassified


 - **Path**: \`/info\`
    
`;
