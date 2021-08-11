import { Output, DiffOutputItem } from './types';

/**
 * Implements functions to deal with the diff.
 * @class
 * @returns {AsyncAPIDiff}
 */
export default class AsyncAPIDiff {
  private output: Output;

  constructor(output: string) {
    // output is a stringified JSON
    this.output= JSON.parse(output);
  }

  /**
   * @returns All the breaking changes
   */
  breaking(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === 'breaking');
  }

  /**
   * @returns All the non-breaking changes
   */
  nonBreaking(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === 'non-breaking');
  }

  /**
   * @returns All the unclassified changes
   */
  unclassified(): DiffOutputItem[] {
    return this.output.changes.filter((diff) => diff.type === 'unclassified');
  }

  /**
   * @returns The JSON output
   */
  getOutput(): Output {
    return this.output;
  }
}
