import classifier from '../src/classifier';
import {
  correctClassification,
  demoStandard,
  unclassifiedChange,
} from './fixtures/classifier.fixtures';

describe('classifier', () => {
  test('should return unclassified in case of empty standard', () => {
    expect(classifier({}, '/some/path')).toStrictEqual(unclassifiedChange);
  });

  test('should return the correct classification with correct path', () => {
    expect(classifier(demoStandard, '/servers')).toStrictEqual(
      correctClassification
    );
  });

  test('should return the correct classification with placeholder path', () => {
    expect(classifier(demoStandard, '/servers/google')).toStrictEqual(
      correctClassification
    );
  });

  test('should return the correct classification with placeholder path', () => {
    expect(classifier(demoStandard, '/servers/google/protocol')).toStrictEqual(
      correctClassification
    );
  });
});
