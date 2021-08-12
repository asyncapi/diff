# diff

AsyncDiff is a library which compares two AsyncAPI Documents and provides information about the differences by pointing out explicitly informations like breaking changes.

## Note

The library doesn't have a built-in parser to parse the given AsyncAPI document. Thus, users have to make sure they provide the valid & dereferenced AsyncAPI document as the input.

Users can use the [AsyncAPI parser](https://github.com/asyncapi/parser-js) to parse the document, or they can use other tools. Though they **must** make sure that the document is valid & dereferenced in case they use other tools to parse the documents.
