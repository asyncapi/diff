import {MarkdownSubtype} from '../types';
import convertToYAML from './output/convertToYAML';

/**
 * Groups an array of changes by their 'type' property
 * @param object The input object
 * @returns The grouped object
 */
export function groupChangesByType(object: any): { string: [{ path: string, any: any }] } {
  return object.reduce((objectsByKeyValue: { [x: string]: any; }, obj: { [x: string]: any; }) => {
    const value = obj['type'];
    // eslint-disable-next-line security/detect-object-injection
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

/**
 * Sets the first letter of a string to uppercase
 * @param s The input string
 * @returns The string with the first letter capitalised
 */
export function capitaliseFirstLetter(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

/**
 * Generates the Markdown list items for a single change
 * @param change The object describing the change
 * @param markdownSubtype the format to display the dropdown data in
 * @returns The Markdown list describing the change
 */
export function generateMarkdownForChange(change: { path: string, any: any }, markdownSubtype: MarkdownSubtype): any {
  const toAppend: any[] = [`**Path**: \`${change.path}\``];
  const listItem = {ul: [] as any[]};

  for (const [label, value] of Object.entries(change)) {
    if (label !== 'path' && label !== 'type') {
      // if the value is an object, display within a dropdown
      if (typeof value === 'object') {
        listItem.ul.push(convertDataToDropdown(capitaliseFirstLetter(label), value, markdownSubtype));
      } else {
        listItem.ul.push(`**${capitaliseFirstLetter(label)}**: ${value}`);
      }
    }
  }

  toAppend.push(listItem);
  return toAppend;
}

/**
 * Converts the label and data to a markdown dropdown
 * @param label The summary / title
 * @param data The data to hide in dropdown
 * @param markdownSubtype the format to display the dropdown data in
 * @returns Markdown string with the label as a summary and the data formatted as JSON code
 */
export function convertDataToDropdown(label: string, data: { string: any }, markdownSubtype: MarkdownSubtype): string {
  const displayData = markdownSubtype === 'json' ? JSON.stringify(data, null, 2) : convertToYAML(data);

  return `<details>
    <summary> ${label} </summary>
    
\`\`\`${markdownSubtype}
${displayData}
\`\`\`            
</details>  
`;
}
