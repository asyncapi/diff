import { AsyncAPIDocument, parse, parseFromUrl } from '@asyncapi/parser';
import { isUrl, readDocument } from './utils';

export interface ParsedOutput {
  firstDocument: AsyncAPIDocument;
  secondDocument: AsyncAPIDocument;
}

/**
 * Parses two AsyncAPI documents
 * @param {String} firstPath Path to first document(either relative path or URL)
 * @param {String} secondPath Path to second document(either relative path or URL)
 * @returns {Promise<ParsedOutput>} The parsed AsyncAPI documents
 */
export async function parser(
  firstPath: string,
  secondPath: string
): Promise<ParsedOutput> {
  const firstDocument = await parseDocument(firstPath),
    secondDocument = await parseDocument(secondPath);
  return { firstDocument, secondDocument };
}

/**
 * Parses the passed document file
 * @param {String} path Path to document
 * @returns {Promise<AsyncAPIDocument>} The parsed AsyncAPI document
 */
async function parseDocument(path: string) {
  if (isUrl(path)) {
    return parseFromUrl(path);
  }
  return parse(await readDocument(path));
}
