interface Tag {
  name: string;
}

interface NuxtContentMeta {
  _id: string;
  _path: string;
}

export interface PostItemContent extends NuxtContentMeta {
  title: string;
  description: string;
  tags: Tag[];
  date: string;
}

export type PostContent = PostItemContent[];
