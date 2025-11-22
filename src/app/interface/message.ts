// Single message interface
export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  userImg: string;
  createAt: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// API response interface
export interface MessageResponse {
  statuscode: number;
  tourism: string;
  message: Message[];
}

export interface SendMessage {
  senderId: string;
  receiverId: string;
  message: string;
}
