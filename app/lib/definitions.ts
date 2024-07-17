export type Project = {
  id: string;
  name: string;
  description: string;
  location: string;
  repository: string;
  tags: string[];
  imageUrl: string;
  archived: boolean;
  pinned: boolean;
};

export type SocialLink = {
  id: string;
  name: string;
  location: string;
};
