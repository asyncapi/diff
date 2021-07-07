# AsyncAPI Diff Standard

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
       - field
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

**NOTE:** At the moment, bindings are out of scope for this library as these are yet not mature enough and lack proper tooling support. Thus, we have considered it as **non-breaking** change for the time being.

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
1. Change in `license` field

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

### `channels`

**Breaking:**

1. Removal of channel(same as changing the channel name)
1. Removal of `subscribe` or `publish` field

**Non-Breaking:**

1. Change in value of `$ref`
     -  During the parsing phase, the `$ref`s will get inlined. So, the change will only depend on the inlined data.
1. Addition of a channel
1. Change in `description`
1. Addition of `subscribe` or `publish` field

#### `subscribe` | `publish`

**Breaking:**

1. Change in `operationId`
1. Change in `traits`

**Non-Breaking:**

1. Change in `summary`
1. Change in `description`
1. Change in `externalDocs`
1. Change in `tags`

##### `message`

**Breaking:**

1. Change in `contentType`
1. Change in `payload`
1. Change in `traits`
1. Change in `headers`
1. Change in `location` inside `correlationId`

**Non-Breaking:**

1. Change in `name`
1. Change in `summary`
1. Change in `description`
1. Change in `examples`
1. Change in `title`
1. Change in `tags`
1. Change in `externalDocs`
1. Change `description` in `correlationId`

#### `parameters`

**Breaking:**

1. Change in `schema`
1. Change in `location`

**Non-Breaking:**

1. Change in value of `$ref`
1. Change in `description`

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
1. Change in `license` field in `info`
1. Removal of a server(equivalent to change in server name)
1. Change in `url` in `servers`
1. Change in `protocol` in `servers`
1. Change in `protocolVersion` in `servers`
1. Change in `default` (`variables`) in `servers`
1. Removal in `enum` (`variables`) in `servers`
1. Change in `security` in `servers`
1. Removal of channel(same as changing the channel name)
1. Removal of `subscribe` or `publish` field in `channels`
1. Change in `operationId` in `subscribe`|`publish`
1. Change in `traits` in `subscribe`|`publish`
1. Change in `contentType` in `message`
1. Change in `payload` in `message`
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
1. Change in `components`
1. Change in `tags`
1. Change in `externalDocs`
1. Change in value of `$ref` in `parameters`