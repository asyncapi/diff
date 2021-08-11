import classifier from './classifier';
import { finalOutputType, DiffOutput, finalDiffChanges } from './types';

/**
 * Categorize the changes
 * @param standard The standard object
 * @param diffs The array of diff changes
 * @returns The final output containing the diff changes as well as the type of change
 */
export default function categorizeChanges(
  standard: any,
  diffs: DiffOutput[]
): finalOutputType {
  // the final output
  const output: finalOutputType = {
    changes: [],
  };

  for (const diff of diffs) {
    const newDiffObject = { ...diff } as finalDiffChanges;
    const classifierObject = classifier(standard, diff.path);
    newDiffObject.type = classifierObject[diff.action] || 'unclassified';
    output.changes.push(newDiffObject);
  }

  return output;
}
