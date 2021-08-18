<h5 align="center">
  <a href="https://www.asyncapi.org"><img src="https://github.com/asyncapi/parser-nodejs/raw/master/assets/logo.png" alt="AsyncAPI logo" width="200"></a>
  <br>
  Diff
</h5>
<p align="center">
  <em>
  AsyncDiff is a library which compares two AsyncAPI Documents and provides information about the differences by pointing out explicitly informations like breaking changes.
  </em>
</p>

![npm](https://img.shields.io/npm/v/@asyncapi/diff?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/@asyncapi/diff?style=for-the-badge)

<!-- toc is generated with GitHub Actions do not remove toc markers -->

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Overriding the built-in standard](#overriding-the-built-in-standard)
- [API](#api)
- [Contributing](#contributing)

<!-- tocstop -->

## Installation

```
npm install @asyncapi/diff
```

## Usage

**NOTE:** The library doesn't have a built-in parser to parse the given AsyncAPI document. Thus, users have to make sure they provide the valid & dereferenced AsyncAPI document as the input. Users can use the [AsyncAPI parser](https://github.com/asyncapi/parser-js) to parse the document, or they can use other tools. Though they **must** make sure that the document is valid & dereferenced in case they use other tools to parse the documents.

```js
import { diff } from '@asyncapi/diff'; // const { diff } = require('@asyncapi/diff');

const output = diff(firstDocument, secondDocument, {
  overrides: {
    // object to override the standard
  },
});
```

### Overriding the built-in standard

To understand the format of overriding object, take a look at [this](standard.md) document.

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

Example:

```js
const output = diff(firstDocument, secondDocument, {
  overrides: {
    '/servers/*/protocol': {
      add: 'non-breaking',
      remove: 'breaking',
      edit: 'unclassified',
    },
  },
});
```

## API

Checkout the [APIs](API.md) document to see all the APIs this library offers.

## Contributing

Help us make this library more robust. Read [CONTRIBUTING](https://github.com/asyncapi/.github/blob/master/CONTRIBUTING.md) guide & start contributing.
