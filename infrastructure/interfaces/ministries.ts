export interface Ministries {
  data: Data[];
  pagination: Pagination;
}

export interface Data {
  id: number;
  name: string;
  description: string;
  icon: string;
  ministriesToLeaders: MinistriesToLeader[];
}

export interface MinistriesToLeader {
  id: number;
  ministryId: number;
  leaderId: number;
  leader: Leader;
}

export interface Leader {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  created_at: Date;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
