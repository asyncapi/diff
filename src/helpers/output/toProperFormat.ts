import { OutputType } from '../../types';
import convertToYAML from './convertToYAML';
import convertToMarkdown from './convertToMarkdown';

/**
 * Converts diff data to the specified format
 * @param data The diff data
 * @param outputType The intended type of the output
 * @returns formatted diff output
 */
export default function toProperFormat<T>(
  data: T,
  outputType: OutputType
): T | string {
  if (outputType === 'yaml' || outputType === 'yml') {
    return convertToYAML(data);
  } else if (outputType === 'markdown') {
    return convertToMarkdown(data);
  }

  return data;
}
