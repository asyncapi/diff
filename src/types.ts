import { ReplaceOperation, AddOperation } from 'fast-json-patch';

type ChangeType = 'breaking' | 'non-breaking' | 'unclassified';

export interface DiffOutput {
  action: string;
  path: string;
  isArrayIndex?: boolean;
  before?: any;
  after?: any;
}

export type OverrideObject = {
  [key: string]: {
    add: ChangeType;
    remove: ChangeType;
    edit: ChangeType;
  };
};

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;
