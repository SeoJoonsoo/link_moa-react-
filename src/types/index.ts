export type Status = 'keep' | 'keep-going' | 'read';

export type LinkInfo = {
  id: number | null;
  title: string;
  url: string;
  writer: string;
  writeDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string | null;
  status: Status;
};
