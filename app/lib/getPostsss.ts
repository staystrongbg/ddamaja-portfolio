import { client } from '../../sanity/lib/client';
import { Post } from '../@types';
export async function getAllPosts(query: string): Promise<Post[]> {
  const response = await client.fetch(query);
  return response;
}
