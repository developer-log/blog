interface NuxtContentMeta {
  _id: string;
  _path: string;
}

// Origin
type OriginType = "habr"
| "vc"
| "medium"
| "vk"
| "telegram";


interface Origin {
  type: OriginType;
  url: string;
}

// Reference
interface Reference {
  name: string;
  url: string;
}

export interface PostItemContent extends NuxtContentMeta {
  title: string;
  description: string;
  tags: string[];
  date: string;
  origin?: Origin;
  references?: Reference[];
}

export type PostContent = PostItemContent[];
