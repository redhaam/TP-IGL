import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Feedback } from "../models/Feedback";
/**
 * Ce fichier représente le service d'envoi d'un feedback par un étudiant
 */

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  /**
   * Ajoute le feedback envoyé par un étudiant à la base de données
   * @param nModule Nom du module
   * @param nivEtude Année d'études de l'étudiant
   * @param feed contenu du feedback
   */
  public addFeedback(nModule: string, nivEtude: string, feed: string) {
    const feedback: Feedback = {
      _id: null,
      nomModule: nModule,
      anneDetude: nivEtude,
      contenu: feed
    };
    this.http
      .post<{ message: string }>(
        "http://localhost:3000/feedback/submit",
        feedback
      )
      .subscribe(reponse => {
        console.log(reponse.message);
      });
  }
}
