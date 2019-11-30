import { Injectable } from "@angular/core";
import { Etudiant } from "../models/Etudiant";
@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor() {}

  addStudent(student: Etudiant) {}
}
