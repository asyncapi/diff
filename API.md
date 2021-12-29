## Classes

<dl>
<dt><a href="#AsyncAPIDiff">AsyncAPIDiff</a></dt>
<dd><p>Implements methods to deal with diff output.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#diff">diff(firstDocument, secondDocument, config)</a> ⇒ <code><a href="#AsyncAPIDiff">AsyncAPIDiff</a></code></dt>
<dd><p>Generates diff between two AsyncAPI documents</p></dd>
</dl>

<a name="AsyncAPIDiff"></a>

## AsyncAPIDiff
<p>Implements methods to deal with diff output.</p>

**Kind**: global class  

* [AsyncAPIDiff](#AsyncAPIDiff)
    * [.breaking()](#AsyncAPIDiff+breaking) ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
    * [.nonBreaking()](#AsyncAPIDiff+nonBreaking) ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
    * [.unclassified()](#AsyncAPIDiff+unclassified) ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
    * [.getOutput()](#AsyncAPIDiff+getOutput) ⇒ <code>Output</code>

<a name="AsyncAPIDiff+breaking"></a>

### asyncAPIDiff.breaking() ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: <code>Array.&lt;DiffOutputItem&gt;</code> - <p>All the breaking changes</p>  
<a name="AsyncAPIDiff+nonBreaking"></a>

### asyncAPIDiff.nonBreaking() ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: <code>Array.&lt;DiffOutputItem&gt;</code> - <p>All the non-breaking changes</p>  
<a name="AsyncAPIDiff+unclassified"></a>

### asyncAPIDiff.unclassified() ⇒ <code>Array.&lt;DiffOutputItem&gt;</code>
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: <code>Array.&lt;DiffOutputItem&gt;</code> - <p>All the unclassified changes</p>  
<a name="AsyncAPIDiff+getOutput"></a>

### asyncAPIDiff.getOutput() ⇒ <code>Output</code>
**Kind**: instance method of [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)  
**Returns**: <code>Output</code> - <p>The JSON output</p>  
<a name="diff"></a>

## diff(firstDocument, secondDocument, config) ⇒ [<code>AsyncAPIDiff</code>](#AsyncAPIDiff)
<p>Generates diff between two AsyncAPI documents</p>

**Kind**: global function  
**Returns**: [<code>AsyncAPIDiff</code>](#AsyncAPIDiff) - <p>The diff data</p>  

| Param | Type | Description |
| --- | --- | --- |
| firstDocument |  | <p>The parsed AsyncAPI document</p> |
| secondDocument |  | <p>The parsed AsyncAPI document</p> |
| config | <code>Object</code> | <p>Configuration options</p> |
| [config.override] | <code>Object</code> | <p>Object to override the standard</p> |

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
