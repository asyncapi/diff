/* eslint-disable no-underscore-dangle */
import { Output, DiffOutputItem } from './types';

export default class AsyncAPIDiff {
  _json: Output;

  constructor(output: string) {
    // output is a stringified JSON
    this._json = JSON.parse(output);
  }

  /**
   * @returns All the breaking changes
   */
  breaking(): DiffOutputItem[] {
    return this._json.changes.filter((diff) => diff.type === 'breaking');
  }

  /**
   * @returns All the non-breaking changes
   */
  nonBreaking(): DiffOutputItem[] {
    return this._json.changes.filter((diff) => diff.type === 'non-breaking');
  }

  /**
   * @returns All the unclassified changes
   */
  unclassified(): DiffOutputItem[] {
    return this._json.changes.filter((diff) => diff.type === 'unclassified');
  }

  /**
   * @returns The JSON output
   */
  json(): Output {
    return this._json;
  }
}
