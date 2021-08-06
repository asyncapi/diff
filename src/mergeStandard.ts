import { StandardType } from './standard';

type ChangeType = 'breaking' | 'non-breaking' | 'unclassified';

export type OverrideObject = {
  [key: string]: {
    add: ChangeType;
    remove: ChangeType;
    edit: ChangeType;
  };
};

/**
 * Merges two standard objects
 * @param standard The original standard object
 * @param overrides The object containing the overrides
 */
export function mergeStandard(
  standard: StandardType,
  overrides: OverrideObject
): void {
  // modifies the passed standard object
  Object.assign(standard, overrides);
}
