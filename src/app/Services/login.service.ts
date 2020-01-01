<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Administration } from '../models/Administration'
import { Etudiant } from '../models/Etudiant'
=======
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Administration } from "../models/Administration";
>>>>>>> 9101df06d57f2421a9cf1e21b87fcb85b422bff6

var user = user => {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password);
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
<<<<<<< HEAD
  constructor(private http: HttpClient) { }
  id: string;


  public getUser(email: string, pwd: string, userType: number) {
    var i = 0;
    var nontrouv = true;
    if (userType === 1) {

      this.http.get('http://localhost:3000/login/admin').subscribe((users: Administration[]) => {

        while ((i < users.length) && (nontrouv)) {
          if ((users[i].user.email === email) && (users[i].user.password === pwd)) {
            nontrouv = false;
          } else {
            i++;
          }
        }
        if (nontrouv) {
          return null;
        } else {
          return users[i]._id;
        }

      });
    }
    if (userType === 2) {
      this.http.get('http://localhost:3000/login/student').subscribe((users: Etudiant[]) => {

        while ((i < users.length) && (nontrouv)) {
          if ((users[i].compte.email === email) && (users[i].compte.password === pwd)) {
=======
  constructor(private http: HttpClient) {}

  public getUser(email: string, pwd: string) {
    this.http
      .get("http://localhost:3000/login/admin")
      .subscribe((users: Administration[]) => {
        var i = 0;
        var nontrouv = true;
        while (i < users.length && nontrouv) {
          if (users[i].user.email === email && users[i].user.password === pwd) {
>>>>>>> 9101df06d57f2421a9cf1e21b87fcb85b422bff6
            nontrouv = false;
          } else {
            i++;
          }
        }
        if (nontrouv) {
<<<<<<< HEAD
          return null;
        } else {
          return users[i]._id;
        }
      });
    }
=======
          alert("Email or password wrong");
        } else {
          alert("Loged in successfuly");
        }
      });
>>>>>>> 9101df06d57f2421a9cf1e21b87fcb85b422bff6
  }
}
