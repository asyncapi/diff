# AsyncAPI Diff Standard

## Types

The changes has been classified into **three** types:

1. `breaking` - The change is a breaking change.
1. `non-breaking` - The change is a non-breaking change.
1. `unclassified` - The change is unclassified. User need to handle this themselves.

## Notes

1. At the moment, bindings are out of scope for this library as these are yet not mature enough and lack proper tooling support. Thus, we have considered it as **unclassified** change for the time being.

1. Some properties which are marked as `non-breaking` or `unclassified` changes does not have any classification for their nested children properties. Therefore, it is assumend that these children properties will be `non-breaking` or `unclassified` as well.

## The schema

The schema has the following <u>fixed</u> fields:

1. [`asyncapi`](#asyncapi)
1. [`id`](#id)
1. [`defaultContentType`](#defaultcontenttype)
1. [`info`](#info)
   - `title`
   - `version`
   - `description`
   - `termsOfService`
   - `contact`
     - `name`
     - `url`
     - `email`
   - `license`
     - `name`
     - `url`
1. [`servers`](#servers)
   - patterned-field (name)
     - `url`
     - `description`
     - `protocol`
     - `protocolVersion`
     - `variables`
       - patterened-field
         - `enum`
         - `default`
         - `description`
         - `examples`
     - `security`
     - `bindings`
1. [`channels`](#channels) (aka Operations)
   - patterned-field
     - `$ref`
     - `description`
     - `bindings`
     - `subscribe`
       - `operationId`
       - `summary`
       - `description`
       - `tags`
       - `externalDocs`
       - `bindings`
       - `traits`
         - `operationId` (string)
         - `summary` (string)
         - `description` (string)
         - `tags`
           - `name`
           - `description`
         - `externalDocs`
         - `bindings`
       - [`message`](#message)
         - `headers`
           - `$ref`
           - [SchemaObject](https://www.asyncapi.com/docs/specifications/v2.0.0#schemaObject)
         - `correlationId`
           - `$ref`
           - `description`
           - `location`
         - `schemaFormat`
         - `contentType`
         - `name`
         - `title`
         - `summary`
         - `tags`
         - `externalDocs`
         - `bindings`
         - `examples`
         - `traits`
           - `headers`
           - `correlationId`
           - `schemaFormat`
           - `contentType`
           - `name`
           - `title`
           - `summary`
           - `description`
           - `tags`
           - `externalDocs`
           - `bindings`
           - `examples`
         - `description`
         - `payload`
     - `publish`
     - `parameters`
       - patterned-field
         - `$ref`
         - `description`
         - `schema`
         - `location`
1. [`components`](#components)
1. [`tags`](#tags)
1. [`externalDocs`](#externaldocs)
   - `description`
   - `url`

## The Standard

### `asyncapi`

ex. Version: `major`.`minor`.`patch`

**Breaking:**

1. Change in `major` version

**Non-Breaking:**

1. Change in `minor`/`patch` version

### `id`

Any change in `id` is **Non-Breaking**

### `defaultContentType`

Change in `defaultContentType` is **Breaking**

### `info`

**Breaking:**

1. Change in `version`
1. Change in `termsOfService`
1. Change in `license` field(including `name` and `url`)

**Non-Breaking:**

1. Change in `title`
1. Change in `description`
1. Change in `contact` field

### `servers`

**Breaking:**

1. Removal of a server(equivalent to change in server name)
1. Change in `url`
1. Change in `protocol`
1. Change in `protocolVersion`
1. Change in `default` (`variables`)
1. Removal in `enum` (`variables`)
1. Change in `security`

**Non-Breaking:**

1. Server being added
1. Change in `description`
1. Change in `description` (`variables`)
1. Change in `examples` (`variables`)
1. Addition in `enum` (`variables`)

**Unclassified**

1. Change in `bindings`

### `channels`

**Breaking:**

1. Removal of channel(same as changing the channel name)
1. Removal of `subscribe` or `publish` field
1. Change of `parameters` field

**Non-Breaking:**

1. Change in value of `$ref`
   - During the parsing phase, the `$ref`s will get inlined. So, the change will only depend on the inlined data.
1. Addition of a channel
1. Change in `description`
1. Addition of `subscribe` or `publish` field

#### `subscribe` | `publish`

**Breaking:**

1. Change in `operationId`
1. Change in `operationdId`(`traits`)

**Non-Breaking:**

1. Change in `summary`
1. Change in `description`
1. Change in `externalDocs`
1. Change in `tags`
1. Change in `summary`(`traits`)
1. Change in `description`(`traits`)
1. Change in `externalDocs`(`traits`)
1. Change in `tags`(`traits`)

**Unclassified:**

1. Change in `bindings`

##### `message`

**Breaking:**

1. Change in `schemaFormat`
1. Change in `contentType`
1. Change in `schemaFromat`, `location` in `correlationId` (`traits`)
1. Change in `location` in `correlationId`

**Non-Breaking:**

1. Change in `name`
1. Change in `summary`
1. Change in `description`
1. Change in `examples`
1. Change in `title`
1. Change in `tags`
1. Change in `externalDocs`
1. Change `description` in `correlationId`
1. Change in `name`, `title`, `summary`, `description`, `tags`, `externalDocs`, `examples` (`traits`)

**Unclassified:**

1. Change in `headers`
1. Change in `bindings`
1. Change in `headers` (`traits`)
1. Change in `bindigs` (`traits`)
1. Change in `payload`

#### `parameters`

**Breaking:**

1. Change in `location`

**Non-Breaking:**

1. Change in value of `$ref`
1. Change in `description`

**Unclassified:**

1. Change in `schema`
   - A JSON schema.

### `components`

Any change in `components` is **non-breaking**.

**Reason:** The parser will inline the `$ref` during the parsing phase.

### `tags`

Any change in `tags` is **non-breaking**.

### `externalDocs`

Any change in `externalDocs` is **non-breaking**.

## Summary

### Breaking changes

1. Change in `major` version in `asycnapi`
1. Change in `defaultContentType` field
1. Change in `version` in `info`
1. Change in `termsOfService` in `info`
1. Change in `license` field in `info`(including `name` and `url`)
1. Removal of a server(equivalent to change in server name)
1. Change in `url` in `servers`
1. Change in `protocol` in `servers`
1. Change in `protocolVersion` in `servers`
1. Change in `default` (`variables`) in `servers`
1. Removal in `enum` (`variables`) in `servers`
1. Change in `security` in `servers`
1. Removal of channel(same as changing the channel name)
1. Removal of `subscribe` or `publish` field in `channels`
1. Change in `parameters` field in `channels`
1. Change in `operationId` in `subscribe`|`publish`
1. Change in `operationId`(`traits`) in `subscribe`|`publish`
1. Change in `traits` in `subscribe`|`publish`
1. Change in `schemaFormat` in `message`
1. Change in `contentType` in `message`
1. Change in `traits` in `message`
1. Change in `headers` in `message`
1. Change in `location` inside `correlationId` in `message`
1. Change in `schema` in `parameters`
1. Change in `location` in `parameters`

### Non-Breaking changes

1. Change in `minor`/`patch` version in `asyncapi`
1. Change in `id` field
1. Change in `title` in `info`
1. Change in `description` in `info`
1. Change in `contact` in `info`
1. Server being added
1. Change in `description` in `servers`
1. Change in `description` (`variables`) in `servers`
1. Change in `examples` (`variables`) in `servers`
1. Addition in `enum` (`variables`) in `servers`
1. Change in value of `$ref` in `channels`
1. Change in `description` in `channels`
1. Addition of `subscribe` or `publish` field in `channels`
1. Change in `summary` in `subscribe`|`publish`
1. Change in `description` in `subscribe`|`publish`
1. Change in `externalDocs` in `subscribe`|`publish`
1. Change in `tags` in `subscribe`|`publish`
1. Change in `name` in `message`
1. Change in `summary` in `message`
1. Change in `description` in `message`
1. Change in `examples` in `message`
1. Change in `title` in `message`
1. Change in `tags` in `message`
1. Change in `externalDocs` in `message`
1. Change in `description` inside `correlationId` in `message`
1. Change in `description` in `parameters`
1. Change in value of `$ref` in `parameters`
1. Change in `components`
1. Change in `tags`
1. Change in `externalDocs`

### Unclassified changes

1. All change in `bindings`
1. Change in `headers` in `message`
1. Change in `headers` in message `traits`
1. Change in `schema`in `parameters`
1. Change in `payload` in `message`
