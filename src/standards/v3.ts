import { breaking, nonBreaking, unclassified } from '../constants';

// TODO: check the new spec changes

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
};
