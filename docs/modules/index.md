[@asyncapi/diff](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Interfaces

- [Classifier](../interfaces/index.Classifier.md)
- [Config](../interfaces/index.Config.md)
- [DiffOutput](../interfaces/index.DiffOutput.md)
- [Output](../interfaces/index.Output.md)
- [OverrideObject](../interfaces/index.OverrideObject.md)

### Type aliases

- [ActionType](index.md#actiontype)
- [ChangeType](index.md#changetype)
- [DiffOutputItem](index.md#diffoutputitem)
- [OverrideStandard](index.md#overridestandard)
- [StandardType](index.md#standardtype)
- [ValueOperation](index.md#valueoperation)

### Functions

- [diff](index.md#diff)

## Type aliases

### ActionType

Ƭ **ActionType**: ``"add"`` \| ``"remove"`` \| ``"edit"``

#### Defined in

[types.ts:6](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L6)

___

### ChangeType

Ƭ **ChangeType**: typeof `breaking` \| typeof `nonBreaking` \| typeof `unclassified`

#### Defined in

[types.ts:8](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L8)

___

### DiffOutputItem

Ƭ **DiffOutputItem**: [`DiffOutput`](../interfaces/index.DiffOutput.md) & { `type`: [`ChangeType`](index.md#changetype)  }

#### Defined in

[types.ts:27](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L27)

___

### OverrideStandard

Ƭ **OverrideStandard**: [`StandardType`](index.md#standardtype) & [`OverrideObject`](../interfaces/index.OverrideObject.md)

#### Defined in

[types.ts:43](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L43)

___

### StandardType

Ƭ **StandardType**: typeof `standard`

#### Defined in

[types.ts:37](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L37)

___

### ValueOperation

Ƭ **ValueOperation**: `ReplaceOperation`<`any`\> \| `AddOperation`<`any`\>

#### Defined in

[types.ts:35](https://github.com/ron-debajyoti/diff/blob/83bb482/src/types.ts#L35)

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
 }
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

[main.ts:29](https://github.com/ron-debajyoti/diff/blob/83bb482/src/main.ts#L29)
