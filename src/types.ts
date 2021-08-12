import { ReplaceOperation, AddOperation } from 'fast-json-patch';
import { AsyncAPIDocument } from '@asyncapi/parser';

import { standard } from './standard';

export interface ParsedOutput {
  firstDocument: AsyncAPIDocument;
  secondDocument: AsyncAPIDocument;
}

export type ActionType = 'add' | 'remove' | 'edit';

export type ChangeType = 'breaking' | 'non-breaking' | 'unclassified';

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
  parse?: boolean;
  override?: OverrideObject;
}
