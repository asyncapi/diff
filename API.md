## Classes

<dl>
<dt><a href="#AsyncAPIDiff">AsyncAPIDiff</a></dt>
<dd><p>Implements methods to deal with diff output.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#diff">diff(firstDocument, secondDocument, config)</a> ⇒ <code><a href="#AsyncAPIDiff">AsyncAPIDiff</a></code></dt>
<dd><p>Generates diff between two AsyncAPI documents</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Output">Output</a> : <code><a href="#Output">Output</a></code></dt>
<dd></dd>
<dt><a href="#DiffOutputItem">DiffOutputItem</a> : <code><a href="#DiffOutputItem">DiffOutputItem</a></code></dt>
<dd></dd>
</dl>

<a name="AsyncAPIDiff"></a>

## AsyncAPIDiff
Implements methods to deal with diff output.

**Kind**: global class  

* [AsyncAPIDiff](#AsyncAPIDiff)
    * [.breaking()](#AsyncAPIDiff+breaking) ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
    * [.nonBreaking()](#AsyncAPIDiff+nonBreaking) ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
    * [.unclassified()](#AsyncAPIDiff+unclassified) ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
    * [.getOutput()](#AsyncAPIDiff+getOutput) ⇒ [<code>Output</code>](#Output)

<a name="AsyncAPIDiff+breaking"></a>

### asyncAPIDiff.breaking() ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem) - All the breaking changes  
<a name="AsyncAPIDiff+nonBreaking"></a>

### asyncAPIDiff.nonBreaking() ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem) - All the non-breaking changes  
<a name="AsyncAPIDiff+unclassified"></a>

### asyncAPIDiff.unclassified() ⇒ [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem)
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: [<code>Array.&lt;DiffOutputItem&gt;</code>](#DiffOutputItem) - All the unclassified changes  
<a name="AsyncAPIDiff+getOutput"></a>

### asyncAPIDiff.getOutput() ⇒ [<code>Output</code>](#Output)
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: [<code>Output</code>](#Output) - The JSON output  
<a name="diff"></a>

## diff(firstDocument, secondDocument, config) ⇒ [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)
Generates diff between two AsyncAPI documents

**Kind**: global function  
**Returns**: [<code>AsyncAPIDiff</code>](#AsyncAPIDiff) - The diff data  

| Param | Type | Description |
| --- | --- | --- |
| firstDocument |  | The parsed AsyncAPI document |
| secondDocument |  | The parsed AsyncAPI document |
| config | <code>Object</code> | Configuration options |
| [config.override] | <code>Object</code> | Object to override the standard |

**Example**  
```js
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
<a name="Output"></a>

## Output : [<code>Output</code>](#Output)
**Kind**: global typedef  
<a name="DiffOutputItem"></a>

## DiffOutputItem : [<code>DiffOutputItem</code>](#DiffOutputItem)
**Kind**: global typedef  
