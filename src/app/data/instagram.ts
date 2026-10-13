// Instagram posts shown on the Resources page.
//
// TO ADD A POST: open the post on Instagram, copy its link (Share > Copy link),
// strip the ?... tracking tail, and add an entry below. Order here is the order
// shown on the page. The page updates on the next deploy.
//
//   url     the post link, e.g. https://www.instagram.com/reel/ABC123/
//   type    "Reel" or "Post" - changes the badge and icon only
//   caption optional one-liner under the thumbnail; omitted if blank

export type InstagramPost = { url: string; type: "Reel" | "Post"; caption?: string };

export const INSTAGRAM_PROFILE = "https://www.instagram.com/fertinestivf";

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { url: "https://www.instagram.com/reel/DdV4170tYaL/", type: "Reel" },
  { url: "https://www.instagram.com/reel/DdETsdJv-Ip/", type: "Reel" },
  { url: "https://www.instagram.com/reel/Dcdy5zlgUeS/", type: "Reel" },
];
