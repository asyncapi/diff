[@asyncapi/diff](../README.md) / index

# Module: index

## Table of contents

### Interfaces

- [AsyncAPIDiffOptions](../interfaces/index.AsyncAPIDiffOptions.md)
- [ChangeMarkdownGenerationConfig](../interfaces/index.ChangeMarkdownGenerationConfig.md)
- [Classifier](../interfaces/index.Classifier.md)
- [Config](../interfaces/index.Config.md)
- [DiffOutput](../interfaces/index.DiffOutput.md)
- [FormatterConfig](../interfaces/index.FormatterConfig.md)
- [JSONOutput](../interfaces/index.JSONOutput.md)
- [MarkdownDropdownGenerationConfig](../interfaces/index.MarkdownDropdownGenerationConfig.md)
- [OverrideObject](../interfaces/index.OverrideObject.md)

### Type aliases

- [ActionType](index.md#actiontype)
- [ChangeType](index.md#changetype)
- [Changes](index.md#changes)
- [DiffOutputItem](index.md#diffoutputitem)
- [MarkdownSubtype](index.md#markdownsubtype)
- [Output](index.md#output)
- [OutputType](index.md#outputtype)
- [OverrideStandard](index.md#overridestandard)
- [StandardType](index.md#standardtype)
- [ValueOperation](index.md#valueoperation)

### Functions

- [diff](index.md#diff)

## Type aliases

### ActionType

Ƭ **ActionType**: ``"add"`` \| ``"remove"`` \| ``"edit"``

#### Defined in

[types.ts:7](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L7)

___

### ChangeType

Ƭ **ChangeType**: typeof `breaking` \| typeof `nonBreaking` \| typeof `unclassified`

#### Defined in

[types.ts:9](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L9)

___

### Changes

Ƭ **Changes**: [`DiffOutputItem`](index.md#diffoutputitem)[] \| `string`

#### Defined in

[types.ts:32](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L32)

___

### DiffOutputItem

Ƭ **DiffOutputItem**: [`DiffOutput`](../interfaces/index.DiffOutput.md) & { `type`: [`ChangeType`](index.md#changetype)  }

#### Defined in

[types.ts:28](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L28)

___

### MarkdownSubtype

Ƭ **MarkdownSubtype**: ``"json"`` \| ``"yaml"`` \| ``"yml"``

#### Defined in

[types.ts:52](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L52)

___

### Output

Ƭ **Output**: [`JSONOutput`](../interfaces/index.JSONOutput.md) \| `string`

#### Defined in

[types.ts:38](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L38)

___

### OutputType

Ƭ **OutputType**: ``"json"`` \| ``"yaml"`` \| ``"yml"`` \| ``"markdown"`` \| ``"md"``

#### Defined in

[types.ts:50](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L50)

___

### OverrideStandard

Ƭ **OverrideStandard**: [`StandardType`](index.md#standardtype) & [`OverrideObject`](../interfaces/index.OverrideObject.md)

#### Defined in

[types.ts:48](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L48)

___

### StandardType

Ƭ **StandardType**: typeof `v2Standard` \| typeof `v3Standard`

#### Defined in

[types.ts:42](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L42)

___

### ValueOperation

Ƭ **ValueOperation**: `ReplaceOperation`<`any`\> \| `AddOperation`<`any`\>

#### Defined in

[types.ts:40](https://github.com/asyncapi/diff/blob/6fcfb89/src/types.ts#L40)

## Functions

### diff

▸ **diff**(`firstDocument`, `secondDocument`, `config?`): [`AsyncAPIDiff`](../classes/asyncapidiff.AsyncAPIDiff.md)

Generates diff between two AsyncAPI documents

**`example`**
```
const output = diff(firstDocument, secondDocument, {
 override: {
   '/servers': {
     add: 'non-breaking', // when a property has been added in the AsyncAPI document
     remove: 'breaking',  // when a property has been removed from the AsyncAPI document
     edit: 'unclassified' // when a property has been edited in the AsyncAPI document
   }
 },
 outputType: "yaml"
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstDocument` | `any` | The parsed AsyncAPI document |
| `secondDocument` | `any` | The parsed AsyncAPI document |
| `config` | [`Config`](../interfaces/index.Config.md) | Configuration options |

#### Returns

[`AsyncAPIDiff`](../classes/asyncapidiff.AsyncAPIDiff.md)

The diff data

#### Defined in

[main.ts:32](https://github.com/asyncapi/diff/blob/6fcfb89/src/main.ts#L32)
