import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }



  public addFeedback(nModule: string, nivEtude: string, feed: string) {
    const feedback: Feedback = {
      _id: null,
      nomModule: nModule,
      anneDetude: nivEtude,
      contenu: feed
    };
    this.http
      .post<{ message: string }>("http://localhost:3000/feedback/submit", feedback)
      .subscribe(reponse => {
        console.log(reponse.message);
      });

  };

}
