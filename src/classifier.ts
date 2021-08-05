/* eslint-disable security/detect-object-injection */
// Disabling this since the object from which we are accessing the properties won't have any prototype chain.
// Also, since we are just using this object to access properties, its safe to disable security check for now.

import { generateClassifierPath } from './ClassifierHelpers';

const breaking = 'breaking';
const nonBreaking = 'non-breaking';
const unclassified = 'unclassified';

type ChangeTypes = typeof breaking | typeof nonBreaking | typeof unclassified;

interface Classifier {
  add: ChangeTypes;
  remove: ChangeTypes;
  edit: ChangeTypes;
}

/**
 * Gets the classifier object from the standard object using the provided path
 * @param standard The standard object
 * @param path The path provided by the diff
 * @returns The classifier object containing `add`, `remove` & `edit` properties
 */
export default function classifier(standard: any, path: string): Classifier {
  const classifierPath = generateClassifierPath(standard, path);
  if (!classifierPath) {
    return {
      add: unclassified,
      remove: unclassified,
      edit: unclassified,
    };
  }
  return standard[classifierPath];
}
