import {
  Output,
  OutputType,
  JSONOutput,
  Changes,
  AsyncAPIDiffOptions,
} from './types';
import { breaking, nonBreaking, unclassified } from './constants';
import toProperFormat from './helpers/output/toProperFormat';

/**
 * Implements methods to deal with diff output.
 * @class
 * 
 * @returns {AsyncAPIDiff} AsynAPIDiff
 */
export default class AsyncAPIDiff {
  private output: JSONOutput;
  private outputType: OutputType;

  constructor(output: string, options: AsyncAPIDiffOptions) {
    // output is a stringified JSON
    this.output = JSON.parse(output);
    this.outputType = options.outputType;
  }

  /**
   * @returns {Changes} All the breaking changes
   */
  breaking(): Changes {
    const breakingChanges = this.output.changes.filter(
      (diff) => diff.type === breaking
    );

    return toProperFormat(breakingChanges, this.outputType);
  }

  /**
   * @returns {Changes} All the non-breaking changes
   */
  nonBreaking(): Changes {
    const nonBreakingChanges = this.output.changes.filter(
      (diff) => diff.type === nonBreaking
    );

    return toProperFormat(nonBreakingChanges, this.outputType);
  }

  /**
   * @returns {Changes} All the unclassified changes
   */
  unclassified(): Changes {
    const unclassifiedChanges = this.output.changes.filter(
      (diff) => diff.type === unclassified
    );

    return toProperFormat(unclassifiedChanges, this.outputType);
  }

  /**
   * @returns {Output}  The full output
   */
  getOutput(): Output {
    return toProperFormat(this.output, this.outputType);
  }
}
