import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Administration } from "../models/Administration";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  admin: Administration;

  constructor(private http: HttpClient) {}

  public getAdmin(id: string) {
    this.http
      .get("http://localhost:3000/login/admin")
      .subscribe(
        (admins: Administration[]) =>
          (this.admin = admins.find(a => a._id === id))
      );
  }
}
