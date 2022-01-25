import { Config, OverrideStandard } from './types';
import generateDiff from './generateDiff';
import { standard } from './standard';
import categorizeChanges from './categorizeChanges';
import AsyncAPIDiff from './asyncapidiff';
import { mergeStandard } from './mergeStandard';

/**
 * Generates diff between two AsyncAPI documents
 * @param firstDocument The parsed AsyncAPI document
 * @param secondDocument The parsed AsyncAPI document
 * @param {Object} config Configuration options
 * @param {Object} [config.override] Object to override the standard
 * @returns {AsyncAPIDiff} The diff data
 *
 * @example
 * ```
 * const output = diff(firstDocument, secondDocument, {
 *  override: {
 *    '/servers': {
 *      add: 'non-breaking', // when a property has been added in the AsyncAPI document
 *      remove: 'breaking',  // when a property has been removed from the AsyncAPI document
 *      edit: 'unclassified' // when a property has been edited in the AsyncAPI document
 *    }
 *  }
 * })
 * ```
 */
export function diff(
  firstDocument: any,
  secondDocument: any,
  config: Config = {}
): AsyncAPIDiff {
  if (config.override) {
    if (typeof config.override !== 'object') {
      throw new TypeError('Override data must be an object');
    }
    mergeStandard(standard, config.override);
  }

  const diffOutput = generateDiff(firstDocument, secondDocument);
  const output = categorizeChanges(standard as OverrideStandard, diffOutput);
  return new AsyncAPIDiff(JSON.stringify(output));
}
