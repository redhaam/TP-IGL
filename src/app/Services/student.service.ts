import { Injectable } from "@angular/core";
import { Etudiant } from "../models/Etudiant";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) { }

  public addStudent(student: Etudiant) {
    this.http
      .post<{ message: string }>(
        "http://localhost:3000/Add/Etudiant",
        student
      )
      .subscribe(reponse => {
        console.log(reponse.message);
      });
  }
}
