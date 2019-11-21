import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

var user = (user) => {
  this.id = user.id,
    this.email = user.email,
    this.password = user.password
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }



  public getUser(email: string, pwd: string) {
    this.http.get('http://localhost:3000/login').subscribe((users) => {

      alert(users[0].email);

    });
  }
}
