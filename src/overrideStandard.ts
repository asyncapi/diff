import { Standard } from './standard';

type ChangeType = 'breaking' | 'non-breaking' | 'unclassified';

type OverrideObject = {
  [key: string]: {
    add: ChangeType;
    remove: ChangeType;
    edit: ChangeType;
  };
};

export function overrideStandard(
  standard: Standard,
  overrides: OverrideObject
): void {
  standard = Object.assign(standard, overrides);
}
