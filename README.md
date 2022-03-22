[![AsyncAPI Banner and Logo](/assets/github-repobanner-diff.png)](https://www.asyncapi.com)

<p>
  <em>
  AsyncDiff is a library that compares two AsyncAPI files and provides information about the differences by pointing out explicitly information like breaking changes.
  </em>
</p>

![npm](https://img.shields.io/npm/v/@asyncapi/diff?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/@asyncapi/diff?style=for-the-badge)

<!-- toc is generated with GitHub Actions do not remove toc markers -->

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Standard object](#standard-object)
  - [Overriding the standard](#overriding-the-standard)
- [Example](#example)
- [API](#api)
- [Develop](#develop)
- [Contributing](#contributing)

<!-- tocstop -->

## Installation

```
npm install @asyncapi/diff
```

## Usage

**NOTE:** The library doesn't have a built-in parser to parse the given AsyncAPI document. Thus, you have to make sure they provide the valid & dereferenced AsyncAPI document as an input. You can use the [AsyncAPI parser](https://github.com/asyncapi/parser-js) to parse and validate the AsyncAPI file first. You can use other tools, but you **must** make sure that the document is valid and dereferenced.

```js
import { diff } from "@asyncapi/diff"; // const { diff } = require('@asyncapi/diff');

const output = diff(firstDocument, secondDocument, {
  overrides: {
    // object to override the standard
  },
});
```

## Standard object

This library has a pre-configured standard which marks a change as `breaking`, `non-breaking` or `unclassified`. This standard data is stored as an object inside the [`standard.ts`](https://github.com/asyncapi/diff/blob/master/src/standard.ts) file.

The format of this standard object is explained in [this](standard-format.md) document.

### Overriding the standard

To understand the format of overriding object, take a look at [this](standard-format.md) document.

The overrides object must be passed in the following format:

```
{
	[jsonPointer]: {
		add: 'breaking' | 'non-breaking' | 'unclassified'
		remove: 'breaking' | 'non-breaking' | 'unclassified'
		edit: 'breaking' | 'non-breaking' | 'unclassified'
	}
}
```

## Example

See the [index](./docs/modules/index.md) document to get all the helper methods this library offers.

1. Without any overrides

```js
const output = diff(firstDocument, secondDocument);

output.getOutput(); // the whole output data
output.breaking(); // the breaking changes
output.nonBreaking(); // the non-breaking changes
output.unclassified(); // the unclassified changes
```

2. With overrides

```js
const output = diff(firstDocument, secondDocument, {
  overrides: {
    "/servers/*/protocol": {
      add: "non-breaking",
      remove: "breaking",
      edit: "unclassified",
    },
  },
});
```

## API

Checkout the [index](./docs/modules/index.md) document to see all the APIs this library offers.

## Develop

1. Write code and tests
2. Make sure all tests pass `npm run test`
3. Make sure code is well formatted and secure `npm run lint`

## Contributing

Help us make this library more robust. Read [CONTRIBUTING](https://github.com/asyncapi/.github/blob/master/CONTRIBUTING.md) guide & start contributing.
