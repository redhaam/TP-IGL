import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Administration } from "../models/Administration";
import { Etudiant } from "../models/Etudiant";
import { Router } from "@angular/router";

var user = user => {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password);
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}
  id: string;
  public checkLogin() {
    if (!this.id) {
      this.router.navigate([""]);
    }
  }

  public getUser(email: string, pwd: string, userType: number): string {
    if (userType === 1) {
      this.http
        .get("http://localhost:3000/login/admin")
        .subscribe((users: Administration[]) => {
          this.id = users.find(
            u => u.user.email == email && u.user.password == pwd
          )._id;
        });
    }
    if (userType === 2) {
      this.http
        .get("http://localhost:3000/login/student")
        .subscribe((users: Etudiant[]) => {
          this.id = users.find(
            u => u.compte.email == email && u.compte.password == pwd
          )._id;
        });
    }
    return this.id;
  }
}
