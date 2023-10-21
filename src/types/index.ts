export type LinkInfo = {
  id: number | null;
  title: string;
  url: string;
  writer: string;
  writeDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string | null;
  status: 'keep' | 'keep-going' | 'read';
};
