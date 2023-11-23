import { client } from '@/sanity/lib/client';
import { Post } from '../@types';

export async function getPost(query: string): Promise<Post[]> {
  const res = await client.fetch(query);
  return res;
}
//mopgao je da bude generic  da prima T i da returnuje T
