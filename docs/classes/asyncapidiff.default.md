[@asyncapi/diff](../README.md) / [Modules](../modules.md) / [asyncapidiff](../modules/asyncapidiff.md) / default

# Class: default

[asyncapidiff](../modules/asyncapidiff.md).default

Implements methods to deal with diff output.

**`returns`**

## Table of contents

### Constructors

- [constructor](asyncapidiff.default.md#constructor)

### Properties

- [output](asyncapidiff.default.md#output)

### Methods

- [breaking](asyncapidiff.default.md#breaking)
- [getOutput](asyncapidiff.default.md#getoutput)
- [nonBreaking](asyncapidiff.default.md#nonbreaking)
- [unclassified](asyncapidiff.default.md#unclassified)

## Constructors

### constructor

• **new default**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |

#### Defined in

[asyncapidiff.ts:12](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L12)

## Properties

### output

• `Private` **output**: [`Output`](../interfaces/index.Output.md)

#### Defined in

[asyncapidiff.ts:10](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L10)

## Methods

### breaking

▸ **breaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the breaking changes

#### Defined in

[asyncapidiff.ts:20](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L20)

___

### getOutput

▸ **getOutput**(): [`Output`](../interfaces/index.Output.md)

#### Returns

[`Output`](../interfaces/index.Output.md)

The JSON output

#### Defined in

[asyncapidiff.ts:41](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L41)

___

### nonBreaking

▸ **nonBreaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the non-breaking changes

#### Defined in

[asyncapidiff.ts:27](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L27)

___

### unclassified

▸ **unclassified**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the unclassified changes

#### Defined in

[asyncapidiff.ts:34](https://github.com/ron-debajyoti/diff/blob/5fe6a02/src/asyncapidiff.ts#L34)
