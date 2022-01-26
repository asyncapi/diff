import { OutputType } from '../../types';
import convertToYAML from './convertToYAML';

/**
 * Converts diff data to the specified format
 * @param data The diff data
 * @returns formatted diff output
 */
export default function toProperFormat<T>(
  data: T,
  outputType: OutputType
): T | string {
  if (outputType === 'yaml' || outputType === 'yml') {
    return convertToYAML(data);
  }

  return data;
}
