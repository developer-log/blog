interface Tag {
  name: string;
}

interface NuxtContentMeta {
  _id: string;
  _path: string;
}

interface PostItem extends NuxtContentMeta {
  title: string;
  description: string;
  tags: Tag[];
  date: string;
}

export type PostContent = PostItem[];
