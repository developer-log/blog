interface NuxtContentMeta {
  _id: string;
  _path: string;
}

type OriginType = "habr"
| "vc"
| "medium"
| "vk"
| "telegram";


interface Origin {
  type: OriginType;
  url: string;
}

export interface PostItemContent extends NuxtContentMeta {
  title: string;
  description: string;
  tags: string[];
  date: string;
  origin?: Origin;
}

export type PostContent = PostItemContent[];
