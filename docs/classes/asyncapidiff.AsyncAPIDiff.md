[@asyncapi/diff](../README.md) / [asyncapidiff](../modules/asyncapidiff.md) / AsyncAPIDiff

# Class: AsyncAPIDiff

[asyncapidiff](../modules/asyncapidiff.md).AsyncAPIDiff

Implements methods to deal with diff output.

**`returns`** AsynAPIDiff

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

[asyncapidiff.ts:13](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L13)

## Properties

### output

• `Private` **output**: [`Output`](../interfaces/index.Output.md)

#### Defined in

[asyncapidiff.ts:11](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L11)

## Methods

### breaking

▸ **breaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the breaking changes

#### Defined in

[asyncapidiff.ts:21](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L21)

___

### getOutput

▸ **getOutput**(): [`Output`](../interfaces/index.Output.md)

#### Returns

[`Output`](../interfaces/index.Output.md)

The JSON output

#### Defined in

[asyncapidiff.ts:42](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L42)

___

### nonBreaking

▸ **nonBreaking**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the non-breaking changes

#### Defined in

[asyncapidiff.ts:28](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L28)

___

### unclassified

▸ **unclassified**(): [`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

#### Returns

[`DiffOutputItem`](../modules/index.md#diffoutputitem)[]

All the unclassified changes

#### Defined in

[asyncapidiff.ts:35](https://github.com/ron-debajyoti/diff/blob/1e9eb43/src/asyncapidiff.ts#L35)
