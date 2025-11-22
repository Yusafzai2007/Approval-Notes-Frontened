export interface JoinedClassesResponse {
  statuscode: number;
  tourism: string;
  message: ClassInfo[];
}

export interface ClassInfo {
  classMemberId: string;
  classId: string;
  teacher: Teacher;
  ClassName: string;
  Subject: string;
  classCode: string;
}

export interface Teacher {
  _id: string;
  userName: string;
  email: string;
}
