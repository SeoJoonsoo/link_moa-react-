export type RepsonseStatus = 'success' | 'fail' | 'error';

export type Response = {
  status: 'success' | 'fail' | 'error';
  message: string;
};

export type LinkStatus = 'keep' | 'keep-going' | 'read';

export type LinkInfo = {
  id: number | null;
  title: string;
  url: string;
  writer: string;
  writeDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string | null;
  status: LinkStatus;
};
};
