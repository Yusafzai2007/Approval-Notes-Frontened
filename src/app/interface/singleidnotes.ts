export interface Notesingle {
  _id:string,
  title: string;
  description: string;
  status: string;
  file: string;
  ClassName: string;
  Subject: string;
  uploadedAt: string; // ya Date type agar aap convert karna chahen
}

export interface NotesResponsesingle {
  statuscode: number;
  tourism: string;
  message: Notesingle[];
}
