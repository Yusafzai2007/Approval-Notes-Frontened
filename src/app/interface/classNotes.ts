export interface Notedataupload {
  _id:string,
  title: string;
  description: string;
  status: string;
  file: string;
  ClassName: string;
  Subject: string;
    filePublicId?: string; // optional if you also return public ID
  uploadedAt: string; // ISO date string
}

export interface NotesResponse {
  statuscode: number;
  tourism: string;
  message: Notedataupload[];
}
