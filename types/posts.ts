import type { PostContent } from "@t/content";

export type PostDateKey = `${string} ${string}`;
export type PostDateGroups = Map<PostDateKey, PostContent>;
export interface PostNavigationItem {
  id: number;
  anchor: string;
  level: number;
  title: string;
}
