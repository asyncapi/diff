import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { URL } from 'url';

/**
 * Checks if the argument is URL or not
 * @param {String} path Path to document
 * @returns {Boolean} Whether the given path is URL or not
 */
export function isUrl(path: string): boolean {
  if (path.startsWith('http')) {
    return !!(new URL(path));
  }
  return false;
}

/**
 * Asynchronously reads the entire content of passed document file
 * @param {String} path Path to document
 * @returns {Promise<String>} The entire content of a file
 */
export function readDocument(path: string): Promise<string> {
  const resolvedPath = resolve(path);
  return readFile(resolvedPath, 'utf-8');
}
