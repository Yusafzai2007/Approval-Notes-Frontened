import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from './interface/signup';

@Injectable({
  providedIn: 'root',
})
export class Socket {
  constructor(private htpp: HttpClient) {}

  login() {
    return this.htpp.get<Signup>('http://localhost:4000/api/v1/chat/users');
  }
}
