import { breaking, nonBreaking, unclassified } from '../constants';

/**
 * The standard object for AsyncAPI v3
 *
 * @private
 */
export const standard = {
  '/asyncapi': {
    add: nonBreaking,
    remove: breaking,
    edit: breaking,
  },
  '/id': {
    add: nonBreaking,
    remove: breaking,
    edit: breaking,
  },
  '/info': {
    add: nonBreaking,
    remove: breaking,
    edit: nonBreaking,
  },
  '/info/title': {},
  '/info/version': {},
  '/info/description': {},
  '/info/termsOfService': {},
  '/info/contact': {},
  '/info/license': {},
  '/info/tags': {},
  '/info/externalDocs': {},
  '/servers': {},
  '/defaultContentType': {},
  '/channels': {},
  '/operations': {},
  '/components': {
    add: nonBreaking,
    remove: nonBreaking,
    edit: nonBreaking,
  }
};
