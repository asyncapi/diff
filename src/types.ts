import { ReplaceOperation, AddOperation } from 'fast-json-patch';

export interface DiffOutput {
  action: string;
  path: string;
  index?: number;
  before?: any;
  after?: any;
}

export type ValueOperation = ReplaceOperation<any> | AddOperation<any>;
