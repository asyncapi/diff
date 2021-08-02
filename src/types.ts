import { ReplaceOperation, AddOperation } from 'fast-json-patch';

export interface DiffOutput {
  action: string;
  path: string;
  isArrayIndex?: boolean;
  before?: any;
  after?: any;
}

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;
