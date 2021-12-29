import { ReplaceOperation, AddOperation } from 'fast-json-patch';

import { standard } from './standard';
import { breaking, nonBreaking, unclassified } from './constants';

export type ActionType = 'add' | 'remove' | 'edit';

export type ChangeType =
  | typeof breaking
  | typeof nonBreaking
  | typeof unclassified;

export interface Classifier {
  add: ChangeType;
  remove: ChangeType;
  edit: ChangeType;
}

export interface DiffOutput {
  action: ActionType;
  path: string;
  isArrayIndex?: boolean;
  before?: any;
  after?: any;
}

/**
 * @typedef {DiffOutput}
 */
export type DiffOutputItem = DiffOutput & {
  type: ChangeType;
};

export interface Output {
  changes: DiffOutputItem[];
}

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;

export type StandardType = typeof standard;
export interface OverrideObject {
  [key: string]: Classifier;
}

export type OverrideStandard = StandardType & OverrideObject;

export interface Config {
  override?: OverrideObject;
}
