export interface StudentsResponse {
  statuscode: number;
  tourism: string;
  message: Student[];
}

export interface Student {
  studentId: string;
  classId:string;
  name: string;
  email: string;
}
