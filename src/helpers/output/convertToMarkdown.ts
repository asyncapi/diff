import json2md from 'json2md';
import {
  capitaliseFirstLetter,
  generateMarkdownForChange,
  groupChangesByType
} from '../MarkdownHelpers';

/**
 * Converts the diff to Markdown
 * @param object The input object
 * @returns Markdown output
 */
export default function convertToMarkdown(object: any): string {
  if (Object.prototype.hasOwnProperty.call(object, 'changes')) {
    object = object.changes;
  }

  const changeTypeGroups = groupChangesByType(object);

  const markdownStructure = [];

  for (const [changeType, changes] of Object.entries(changeTypeGroups)) {
    markdownStructure.push({h2: capitaliseFirstLetter(changeType)});
    const outerList = {ul: [] as any[]};

    for (const change of changes) {
      outerList.ul.push(...generateMarkdownForChange(change));
    }

    markdownStructure.push(outerList);
  }

  return json2md(markdownStructure);
}
