import type { UseSeoMetaInput } from "@unhead/schema";

interface ogArguments {
  url: URL;
  title: string;
  author: string;
  image: {
    title: string;
    description: string;
  }
}

const useOg = ({
  title,
  author,
  url,
  image,
}: ogArguments) => {

  const imageQuery = encodeURI(`title=${image.title}&description=${image.description}`);
  const imageSource = `${url.origin}/api/og?${imageQuery}`;

  return {
    title,
    // description,
    author,

    // OG
    ogTitle: title,
    // ogDescription: description,
    ogImage: imageSource,
    ogImageAlt: title,

    // Twitter
    twitterTitle: title,
    // twitterDescription: description,
    twitterImage: imageSource,
    twitterImageAlt: title,
  } as Partial<UseSeoMetaInput>;
};

export default useOg;
