export type Tag = {
  id: number;
  name: string;
}
export type ListWriteUp = {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_at:string;
  tags: Tag[]
}

export type GetWriteUp = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  content: string
  url: string
  tags: Tag[]
}

export type Image = {
  id: number;
  image: string;
}
export type ListProject = {
  id: number;
  name: string;
  short_description:string;
  tags: Tag[];
  created_at: string;
  slug: string;
  image: Image;
}

export type GetProject = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  tags: Tag[];
  created_at: string;
  images: Image[]
  link: string;
}