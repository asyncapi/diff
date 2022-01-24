[@asyncapi/diff](../README.md) / [Modules](../modules.md) / [asyncapidiff](../modules/asyncapidiff.md) / AsyncAPIDiff

# Class: AsyncAPIDiff

[asyncapidiff](../modules/asyncapidiff.md).AsyncAPIDiff

Implements methods to deal with diff output.

**`returns`**

## Table of contents

### Constructors

- [constructor](asyncapidiff.AsyncAPIDiff.md#constructor)

### Properties

- [output](asyncapidiff.AsyncAPIDiff.md#output)

### Methods

- [breaking](asyncapidiff.AsyncAPIDiff.md#breaking)
- [getOutput](asyncapidiff.AsyncAPIDiff.md#getoutput)
- [nonBreaking](asyncapidiff.AsyncAPIDiff.md#nonbreaking)
- [unclassified](asyncapidiff.AsyncAPIDiff.md#unclassified)

## Constructors

### constructor

• **new AsyncAPIDiff**(`output`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |

#### Defined in

[asyncapidiff.ts:12](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L12)

## Properties

### output

• `Private` **output**: [`Output`](../interfaces/index.Output.md)

#### Defined in

[asyncapidiff.ts:10](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L10)

## Methods

### breaking

▸ **breaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the breaking changes

#### Defined in

[asyncapidiff.ts:20](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L20)

___

### getOutput

▸ **getOutput**(): [`Output`](../interfaces/index.Output.md)

#### Returns

[`Output`](../interfaces/index.Output.md)

The JSON output

#### Defined in

[asyncapidiff.ts:41](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L41)

___

### nonBreaking

▸ **nonBreaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the non-breaking changes

#### Defined in

[asyncapidiff.ts:27](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L27)

___

### unclassified

▸ **unclassified**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the unclassified changes

#### Defined in

[asyncapidiff.ts:34](https://github.com/ron-debajyoti/diff/blob/ae7b7f4/src/asyncapidiff.ts#L34)
