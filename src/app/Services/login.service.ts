import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Administration } from "../models/Administration";
import { Etudiant } from "../models/Etudiant";

var user = user => {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password);
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  currentuser: string;
  constructor(private http: HttpClient) {}
  id: string;

  public getUser(email: string, pwd: string, userType: number) {
    let i = 0;
    let nontrouv = true;
    if (userType === 1) {
      this.http
        .get("http://localhost:3000/login/admin")
        .subscribe((users: Administration[]) => {
          while (i < users.length && nontrouv) {
            if (
              users[i].user.email === email &&
              users[i].user.password === pwd
            ) {
              nontrouv = false;
            } else {
              i++;
            }
          }
          if (nontrouv) {
            this.currentuser = null;
            return null;
          } else {
            this.currentuser = users[i].nom + " " + users[i].prenom;
            return users[i]._id;
          }
        });
    }
    if (userType === 2) {
      this.http
        .get("http://localhost:3000/login/student")
        .subscribe((users: Etudiant[]) => {
          while (i < users.length && nontrouv) {
            if (
              users[i].compte.email === email &&
              users[i].compte.password === pwd
            ) {
              nontrouv = false;
            } else {
              i++;
            }
          }
          if (nontrouv) {
            this.currentuser = null;
            return null;
          } else {
            this.id = users[i]._id;
            this.currentuser = users[i].nom + " " + users[i].prenom;
            return users[i]._id;
          }
        });
    }
  }
}
