import { Injectable } from "@angular/core";
import { Etudiant } from "../models/Etudiant";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

/**
 * Ce fichier représente le service d'ajout d'un étudiant par l'administration
 */
@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(private http: HttpClient) {}
  /**
   * Ajoute l'étudiant à la base de données
   * @param student l'étudiant ajouté par l'administration
   */
  public addStudent(student: Etudiant) {
    console.log(student);
    this.http
      .post<{ message: string }>("http://localhost:3000/Add/Etudiant", student)
      .subscribe(reponse => {
        console.log(reponse.message);
      });
  }
}
