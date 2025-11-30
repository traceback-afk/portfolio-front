export type Image = {
  id: number;
  image: string;
};

export type Tag = {
  id: number;
  name: string;
};

export type Tool = {
  id: number;
  name: string;
  icon: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  short_description: string;
  is_featured: Boolean;
  images: Image[];
  tags: Tag[];
  tools: Tool[];
  link: string;
};


export type ListWriteUp = {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_at:string;
}

export type GetWriteUp = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  content: string
}