import { Output, DiffOutputItem } from './types';
import { breaking, nonBreaking, unclassified } from './constants';

/**
 * @typedef {import('./types').Output} Output
 * @typedef {import('./types').DiffOutputItem} DiffOutputItem
 */

/**
 * Implements methods to deal with diff output.
 * @class
 * @returns {AsyncAPIDiff}
 */
export default class AsyncAPIDiff {
  private output: Output;

  constructor(output: string) {
    // output is a stringified JSON
    this.output = JSON.parse(output);
  }

  /**
   * @returns {Array<DiffOutputItem>} All the breaking changes
   */
  breaking(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === breaking);
  }

  /**
   * @returns {Array<DiffOutputItem>} All the non-breaking changes
   */
  nonBreaking(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === nonBreaking);
  }

  /**
   * @returns {Array<DiffOutputItem>} All the unclassified changes
   */
  unclassified(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === unclassified);
  }

  /**
   * @returns {Output}  The JSON output
   */
  getOutput(): Output {
    return this.output;
  }
}
