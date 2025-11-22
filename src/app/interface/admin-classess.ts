export interface Classdata {
  _id: string;
  ClassName: string;
  Subject: string;
  classCode: string;
  teacher: string;
  createdAt: string; // or Date if you plan to convert
  updatedAt: string; // or Date if you plan to convert
  __v: number;
}

export interface ClassesResponsedata {
  statuscode: number;
  tourism: string;
  message: Classdata[];
}
