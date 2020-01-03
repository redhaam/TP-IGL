import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Administration } from "../models/Administration";
import { Etudiant } from "../models/Etudiant";
import { Router } from "@angular/router";

/**
 * Ce fichier représente le service d'authentification des utilisateur
 */

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

  /** l'identifiant de l'utilisateur */
  id: string;
  /** nom et prenom de l'utilisateur connecté */
  currentuser: string;

  /**
   * Vérifie que l'utilisateur est authentifié
   */
  public checkLogin() {
    if (!this.id) {
      this.router.navigate([""]);
    }
  }

  /**
   * Récupère les informations de l'utilisateur lors de l'authentification
   * @param email l'email entré dans le formulaire par l'utilisateur
   * @param pwd le mot de passe entré par l'utilisateur
   * @param userType le type de l'utilisateur (etudiant, enseignant ou administration)
   * @returns l'identifiant de l'utilisateur s'il existe , sinon chaîne vide
   */
  public getUser(email: string, pwd: string, userType: number): string {
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
            this.id = "";
            this.currentuser = "";
            return "";
          } else {
            this.currentuser = users[i].nom + " " + users[i].prenom;
            this.id = users[i]._id;
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
            this.currentuser = "";
            return "";
          } else {
            this.id = users[i]._id;
            this.currentuser = users[i].nom + " " + users[i].prenom;
            return users[i]._id;
          }
        });
    }
    return this.id;
  }
}
