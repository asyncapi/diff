import { Output, OutputType, JSONOutput, Changes } from './types';
import { breaking, nonBreaking, unclassified } from './constants';
import convertToYAML from './helpers/output/convertToYAML';

/**
 * Implements methods to deal with diff output.
 * @class
 * 
 * @returns {AsyncAPIDiff} AsynAPIDiff
 */
export default class AsyncAPIDiff {
  private output: JSONOutput;
  private outputType: OutputType;

  constructor(output: string, outputType: OutputType) {
    // output is a stringified JSON
    this.output = JSON.parse(output);
    this.outputType = outputType;
  }

  /**
   * @returns {Changes} All the breaking changes
   */
  breaking(): Changes {
    const breakingChanges = this.output.changes.filter(
      (diff) => diff.type === breaking
    );

    if (this.outputType === 'yaml') {
      return convertToYAML(breakingChanges);
    }

    return breakingChanges;
  }

  /**
   * @returns {Changes} All the non-breaking changes
   */
  nonBreaking(): Changes {
    const nonBreakingChanges = this.output.changes.filter(
      (diff) => diff.type === nonBreaking
    );

    if (this.outputType === 'yaml') {
      return convertToYAML(nonBreakingChanges);
    }

    return nonBreakingChanges;
  }

  /**
   * @returns {Changes} All the unclassified changes
   */
  unclassified(): Changes {
    const unclassifiedChanges = this.output.changes.filter(
      (diff) => diff.type === unclassified
    );

    if (this.outputType === 'yaml') {
      return convertToYAML(unclassifiedChanges);
    }

    return unclassifiedChanges;
  }

  /**
   * @returns {Output}  The full output
   */
  getOutput(): Output {
    if (this.outputType === 'yaml') {
      return convertToYAML(this.output);
    }
    return this.output;
  }
}
