import type { SchemaTypeDefinition } from 'sanity';

import documents from './documents';
import objects from './objects';
import types from './types';

const schemaTypes: SchemaTypeDefinition[] = [
  ...documents,
  ...objects,
  ...types,
];

const schemaDefinition = {
  types: schemaTypes,
};

export default schemaDefinition;
