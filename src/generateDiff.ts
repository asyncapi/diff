import { compare } from 'fast-json-patch';

import {
  formatDiffOutput,
  removeCircularReferences,
} from './helpers/DiffHelpers';
import { DiffOutput } from './types';

/**
 * Generates the diff
 * @param {*} firstDocument The first document in JSON format
 * @param {*} secondDocument The second document in JSON format
 * @returns {DiffOutput[]} An array containing all the diffs
 *
 * @private
 */
export default function generateDiff(
  firstDocument: any,
  secondDocument: any
): DiffOutput[] {
  // resolved `$ref`s make recursive schemas circular, which `compare` can't clone
  const first = removeCircularReferences(firstDocument);
  const second = removeCircularReferences(secondDocument);
  const diffOutput = compare(first, second);
  return formatDiffOutput(diffOutput, first);
}
