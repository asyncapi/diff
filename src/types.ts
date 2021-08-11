import { ReplaceOperation, AddOperation } from 'fast-json-patch';

export type actionType = 'add' | 'remove' | 'edit';

export type changes = 'breaking' | 'non-breaking' | 'unclassified';

export interface Classifier {
  add: changes;
  remove: changes;
  edit: changes;
}

export interface DiffOutput {
  action: actionType;
  path: string;
  isArrayIndex?: boolean;
  before?: any;
  after?: any;
}

export type finalDiffChanges = DiffOutput & {
  type: changes;
};

export interface FinalOutputType {
  changes: finalDiffChanges[];
}

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;
