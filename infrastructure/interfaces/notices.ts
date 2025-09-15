export interface Notices {
  data: Notice[];
  pagination: Pagination;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  created_at: Date;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
