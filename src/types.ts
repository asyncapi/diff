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

export type DiffOutputItem = DiffOutput & {
  type: ChangeType;
};

export type Changes = DiffOutputItem[] | string;

export interface JSONOutput {
  changes: DiffOutputItem[];
}

export type Output = JSONOutput | string;

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;

export type StandardType = typeof standard;

export interface OverrideObject {
  [key: string]: Classifier;
}

export type OverrideStandard = StandardType & OverrideObject;

export type OutputType = 'json' | 'yaml';

export interface Config {
  override?: OverrideObject;
  outputType?: OutputType;
}
