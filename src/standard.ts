import { getDocumentMajorVersion } from './helpers/DiffHelpers';
import { standard as v2Standard } from './standards/v2';
import { standard as v3Standard } from './standards/v3';
import { StandardType } from 'types';

export function getStandardFromVersion(document: any): StandardType {
  const majorVersion = getDocumentMajorVersion(document);
  if (majorVersion === '2') {
    return v2Standard;
  }
  return v3Standard;
}
