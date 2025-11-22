export interface CurrentUserResponsedata {
  statuscode: number;
  tourism: string;
  message: CurrentUserdata;
}

export interface CurrentUserdata {
  _id: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
