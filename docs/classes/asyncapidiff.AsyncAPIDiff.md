[@asyncapi/diff](../README.md) / [asyncapidiff](../modules/asyncapidiff.md) / AsyncAPIDiff

# Class: AsyncAPIDiff

[asyncapidiff](../modules/asyncapidiff.md).AsyncAPIDiff

Implements methods to deal with diff output.

**`returns`** AsyncAPIDiff

## Table of contents

### Constructors

- [constructor](asyncapidiff.AsyncAPIDiff.md#constructor)

### Properties

- [markdownSubtype](asyncapidiff.AsyncAPIDiff.md#markdownsubtype)
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

[asyncapidiff.ts:23](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L23)

## Properties

### markdownSubtype

• `Private` **markdownSubtype**: [`MarkdownSubtype`](../modules/index.md#markdownsubtype)

#### Defined in

[asyncapidiff.ts:21](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L21)

___

### output

• `Private` **output**: [`JSONOutput`](../interfaces/index.JSONOutput.md)

#### Defined in

[asyncapidiff.ts:19](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L19)

___

### outputType

• `Private` **outputType**: [`OutputType`](../modules/index.md#outputtype)

#### Defined in

[asyncapidiff.ts:20](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L20)

## Methods

### breaking

▸ **breaking**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the breaking changes

#### Defined in

[asyncapidiff.ts:33](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L33)

___

### getOutput

▸ **getOutput**(): [`Output`](../modules/index.md#output)

#### Returns

[`Output`](../modules/index.md#output)

The full output

#### Defined in

[asyncapidiff.ts:66](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L66)

___

### nonBreaking

▸ **nonBreaking**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the non-breaking changes

#### Defined in

[asyncapidiff.ts:44](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L44)

___

### unclassified

▸ **unclassified**(): [`Changes`](../modules/index.md#changes)

#### Returns

[`Changes`](../modules/index.md#changes)

All the unclassified changes

#### Defined in

[asyncapidiff.ts:55](https://github.com/asyncapi/diff/blob/6fcfb89/src/asyncapidiff.ts#L55)
