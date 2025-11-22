export interface Signup {
  userName: string;
  email: string;
  password: string;
  userimg?: string;
}

export interface login {
  email: string;
  password: string;
}

export interface OTPVerify {
  email: string;
  otp: string;
}



export interface TourismUser {
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

export interface TourismResponse {
  statuscode: number;
  tourism: TourismUser[];
  message: string;
}
