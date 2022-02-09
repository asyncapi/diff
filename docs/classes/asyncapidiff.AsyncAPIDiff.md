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
- [outputType](asyncapidiff.AsyncAPIDiff.md#outputtype)

### Methods

- [breaking](asyncapidiff.AsyncAPIDiff.md#breaking)
- [getOutput](asyncapidiff.AsyncAPIDiff.md#getoutput)
- [nonBreaking](asyncapidiff.AsyncAPIDiff.md#nonbreaking)
- [unclassified](asyncapidiff.AsyncAPIDiff.md#unclassified)

## Constructors

### constructor

• **new AsyncAPIDiff**(`output`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |
| `options` | [`AsyncAPIDiffOptions`](../interfaces/index.AsyncAPIDiffOptions.md) |

#### Defined in

[asyncapidiff.ts:21](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L21)

## Properties

### output

• `Private` **output**: [`JSONOutput`](../interfaces/index.JSONOutput.md)

#### Defined in

[asyncapidiff.ts:18](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L18)

___

### outputType

• `Private` **outputType**: [`OutputType`](../modules/index.md#outputtype)

#### Defined in

[asyncapidiff.ts:19](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L19)

## Methods

### breaking

▸ **breaking**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the breaking changes

#### Defined in

[asyncapidiff.ts:30](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L30)

___

### getOutput

▸ **getOutput**(): [`Output`](../modules/index.md#output)

#### Returns

[`Output`](../modules/index.md#output)

The full output

#### Defined in

[asyncapidiff.ts:63](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L63)

___

### nonBreaking

▸ **nonBreaking**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the non-breaking changes

#### Defined in

[asyncapidiff.ts:41](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L41)

___

### unclassified

▸ **unclassified**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the unclassified changes

#### Defined in

[asyncapidiff.ts:52](https://github.com/asyncapi/diff/blob/756921c/src/asyncapidiff.ts#L52)
