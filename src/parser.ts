import { AsyncAPIDocument, parse, parseFromUrl } from '@asyncapi/parser';
import { isUrl, readDocument } from './utils';

export interface ParsedOutput {
  parsedDocument1: AsyncAPIDocument;
  parsedDocument2: AsyncAPIDocument;
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
  const parsedDocument1 = await parseDocument(firstPath);
  const parsedDocument2 = await parseDocument(secondPath);
  return { parsedDocument1, parsedDocument2 };
}

/**
 * Parses the passed document file
 * @param {String} path Path to document
 * @returns {Promise<AsyncAPIDocument>} The parsed AsyncAPI document
 */
async function parseDocument(path: string) {
  let parsedDocument;
  if (isUrl(path)) {
    parsedDocument = await parseFromUrl(path);
  } else {
    const document = readDocument(path);
    parsedDocument = await parse(document);
  }
  return parsedDocument;
}
