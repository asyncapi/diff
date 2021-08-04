/* eslint-disable security/detect-object-injection */
import { generateClassifierPath } from './ClassifierHelpers';

interface Classifier {
  add: 'breaking' | 'non-breaking' | 'unclassified';
  remove: 'breaking' | 'non-breaking' | 'unclassified';
  edit: 'breaking' | 'non-breaking' | 'unclassified';
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
      add: 'unclassified',
      remove: 'unclassified',
      edit: 'unclassified',
    };
  }
  return standard[classifierPath];
}