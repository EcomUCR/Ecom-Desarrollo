export interface User {
  id: number;
  email: string;
}

export interface Client {
  id: number;
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  address?: string | null;
  avatar?: string | null;
}

export interface Vendor {
  id: number;
  user_id: number;
  name: string;
  phone_number?: string | null;
}

export interface MeResponse {
  user: User;
  client: Client | null;
  vendor: Vendor | null;
}
