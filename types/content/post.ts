interface NuxtContentMeta {
  _id: string;
  _path: string;
}


export interface PostItemContent extends NuxtContentMeta {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export type PostContent = PostItemContent[];
