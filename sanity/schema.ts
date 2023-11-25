import { type SchemaTypeDefinition } from 'sanity';
import { project } from './schemas/project-schema';
import { post } from './schemas/blog-post';
import { stack } from './schemas/stack-schema';
import { tag } from './schemas/tag-schema';
import { tech } from './schemas/tech-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, post, tech, tag],
};
