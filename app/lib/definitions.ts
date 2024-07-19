export type BlogMetadata = {
  title: string;
  description: string;
  publishedAt: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  location: string;
  repository: string;
  tags: { id: string; name: string }[];
  imageUrl: string;
  archived: boolean;
  pinned: boolean;
};

export type SocialLink = {
  id: string;
  name: string;
  location: string;
};
