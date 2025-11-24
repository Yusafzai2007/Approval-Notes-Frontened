import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JoinedClassesResponse } from '../interface/all-classes';
import { Student, StudentsResponse } from '../interface/viewStudent';
import { NotesResponse } from '../interface/classNotes';
import { NotesResponsesingle } from '../interface/singleidnotes';
import { ClassesResponsedata } from '../interface/admin-classess';
import { CurrentUserResponsedata } from '../interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  userlogin(data: any) {
    return this.http.post('http://localhost:4000/api/v1/login', data, {
      withCredentials: true,
    });
  }

  usersignup(data: any) {
    return this.http.post('http://localhost:4000/api/v1/signup', data);
  }
  joinclass(data: any) {
    return this.http.post('http://localhost:4000/api/v1/join-class', data, {
      withCredentials: true,
    });
  }

  uploadNotes(formData: FormData) {
    return this.http.post('http://localhost:4000/api/v1/upload-Notes', formData, {
      withCredentials: true,
    });
  }

  allClasses() {
    return this.http.get<JoinedClassesResponse>('http://localhost:4000/api/v1/get-classfellow', {
      withCredentials: true,
    });
  }
  adminclassess() {
    return this.http.get<ClassesResponsedata>('http://localhost:4000/api/v1/get-Myclasses', {
      withCredentials: true,
    });
  }
  viewStudent(classId: string) {
    return this.http.get<StudentsResponse>(
      `http://localhost:4000/api/v1/get-My-class-students/${classId}`,
      {
        withCredentials: true,
      }
    );
  }

  MyNotes() {
    return this.http.get<NotesResponse>('http://localhost:4000/api/v1/getMyNotes', {
      withCredentials: true,
    });
  }

  getsingleidnotes(studentId: string) {
    return this.http.get<NotesResponsesingle>(
      `http://localhost:4000/api/v1/getNotesByUser/${studentId}`,
      {
        withCredentials: true,
      }
    );
  }
  editNotes(id: string, formData: FormData) {
    return this.http.post(`http://localhost:4000/api/v1/edit-notes/${id}`, formData, {
      withCredentials: true,
    });
  }

  deletenotes(id: string, data: any) {
    return this.http.post(`http://localhost:4000/api/v1/deleteNote/${id}`, data, {
      withCredentials: true,
    });
  }

  admineditclass(id: string, data: any) {
    return this.http.post(`http://localhost:4000/api/v1/edit-class/${id}`, data, {
      withCredentials: true,
    });
  }

  downloadFile(url: string, filename: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  editstatus(data: any, id: string) {
    return this.http.post(`http://localhost:4000/api/v1/update-class-notes/${id}`, data, {
      withCredentials: true,
    });
  }

  currentuserlogin() {
    return this.http.get<CurrentUserResponsedata>('http://localhost:4000/api/v1/currentuser', {
      withCredentials: true,
    });
  }
  classesnotes() {
    return this.http.get<CurrentUserResponsedata>('http://localhost:4000/api/v1/currentuser', {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.post(
      'http://localhost:4000/api/v1/logout',
      {},
      {
        withCredentials: true,
      }
    );
  }

  private apiUrl = 'http://localhost:4000/api/v1'; // base URL

  // service.ts
  getUserByClass(userId: string, classId: string): Observable<NotesResponse> {
    return this.http.get<NotesResponse>(`${this.apiUrl}/user/${userId}/class/${classId}`, {
      withCredentials: true,
    });
  }

  // Use DELETE request instead of POST
  deleteClass(id: string) {
    return this.http.delete(`http://localhost:4000/api/v1/deleteClass/${id}`);
  }
}
