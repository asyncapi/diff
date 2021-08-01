import { compare } from 'fast-json-patch';

import { modifyDiffOutput, DiffOutput } from './helpers/DiffHelpers';

/**
 * Generates the diff
 * @param {*} firstDocument The first document in JSON format
 * @param {*} secondDocument The second document in JSON format
 * @returns {DiffOutput[]} An array containing all the diffs
 */
export default function diff(
  firstDocument: any,
  secondDocument: any
): DiffOutput[] {
  const diffOutput = compare(firstDocument, secondDocument);
  return modifyDiffOutput(diffOutput, firstDocument);
}
