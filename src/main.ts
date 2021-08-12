import { Config, OverrideStandard } from './types';
import generateDiff from './generateDiff';
import { standard } from './standard';
import categorizeChanges from './categorizeChanges';
import AsyncAPIDiff from './asyncapidiff';
import { mergeStandard } from './mergeStandard';

/**
 * Generates diff between two AsyncAPI documents
 * @param firstDocument The parsed AsycnAPI document
 * @param secondDocument The parsed AsycnAPI document
 * @param {Config} config Configuration options
 * @returns {AsyncAPIDiff} The diff data
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
