

export interface User {
  userimg: string;
  _id: string;
  userName: string;
  email: string;
  role: string;
  isvarified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Tourism {
  users: User;
}

export interface CurrentUserResponse {
  statuscode: number;
  tourism: Tourism;
  message: string;
    isOnline?: boolean;

}











export interface UserSidebarResponse {
  statuscode: number;
  tourism: string;
  message: UserSidebar;
}

export interface UserSidebar {
  _id: string;
  userName: string;
  email: string;
  role: string;
  isvarified: boolean;
  userimg: string;
  createdAt: string;
  updatedAt: string;
    isOnline?: boolean;
  __v: number;
}










