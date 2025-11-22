export interface Note {
  _id: string;
  userId: string;
  classId: string;
  title: string;
  description: string;
  file: string;
  status: "pending" | "approved" | "rejected"; // based on your status values
  uploadedAt: string; // ISO date string
  ClassName: string;
  Subject: string;
}

export interface NotesResponse {
  statuscode: number;
  tourism: string;
  message: Note[];
}
