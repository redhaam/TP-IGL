import { Injectable } from "@angular/core";
import { Etudiant } from "../models/Etudiant";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { User } from "../models/user";

/**
 * Ce fichier représente le service d'ajout d'un étudiant par l'administration
 */
@Injectable({
  providedIn: "root"
})
export class StudentService {
  etudiant: Etudiant = {
    _id: "",
    compte: { email: "", password: "" },
    matricule: null,
    moyenne: null,
    nb_absences: null,
    niveauDEtude: null,
    nom: "",
    num_gp: null,
    prenom: ""
  };
  constructor(private http: HttpClient) {}

  public getStudent(id: string) {
    this.http
      .get("http://localhost:3000/login/student")
      .subscribe(
        (etudiants: Etudiant[]) =>
          (this.etudiant = etudiants.find(e => e._id === id))
      );
  }

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
