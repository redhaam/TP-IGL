import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Administration } from "../models/Administration";

var user = user => {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password);
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public getUser(email: string, pwd: string) {
    this.http
      .get("http://localhost:3000/login/admin")
      .subscribe((users: Administration[]) => {
        var i = 0;
        var nontrouv = true;
        while (i < users.length && nontrouv) {
          if (users[i].user.email === email && users[i].user.password === pwd) {
            nontrouv = false;
          } else {
            i++;
          }
        }
        if (nontrouv) {
          alert("Email or password wrong");
        } else {
          alert("Loged in successfuly");
        }
      });
  }
}
