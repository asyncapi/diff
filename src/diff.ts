import { compare, Operation } from 'fast-json-patch';

import {
  setIndex,
  formatAction,
  getBeforeValue,
  getAfterValue,
  DiffOutput,
} from './helpers/DiffHelpers';

/**
 * Formats the original diff output
 * @param {Operation[]} diff The original diff array
 * @param {*} firstDocument The first document
 * @returns {DiffOutput[]} The modified diffs array
 */
function modifyDiffOutput(diff: Operation[], firstDocument: any): DiffOutput[] {
  const output: DiffOutput[] = [];
  for (const value of diff) {
    const changeObject = {} as DiffOutput;
    changeObject.action = formatAction(value.op);
    changeObject.path = value.path;
    setIndex(changeObject, firstDocument, value.path);
    if (value.op === 'remove' || value.op === 'replace') {
      changeObject.before = getBeforeValue(firstDocument, value.path);
    }
    if (value.op === 'replace' || value.op === 'add') {
      changeObject.after = getAfterValue(value);
    }
    output.push(changeObject);
  }
  return output;
}

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
