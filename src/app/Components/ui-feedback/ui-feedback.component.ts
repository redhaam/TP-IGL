/**
 * Ce fichier représente l'interface que verra l'étudiant en donnant un feedback
 */

import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Feedback } from "src/app/models/Feedback";
import { NgForm } from "@angular/forms";
import { FeedbackService } from "../../Services/feedback.service";

@Component({
  selector: "app-ui-feedback",
  templateUrl: "./ui-feedback.component.html",
  styleUrls: ["./ui-feedback.component.css"]
})
export class UiFeedbackComponent implements OnInit {
  @Input() feedback: Feedback = {
    _id: "",
    anneDetude: "",
    nomModule: "",
    contenu: ""
  };

  @ViewChild("formulaire", null) form: any;
  constructor(public feedbackservice: FeedbackService) {}

  ngOnInit() {}

  /**
   * Validation et envoi du feedback
   * @param form : le formulaire contenant les information du feedback, entrées par l'étudiant
   */
  onSubmit(form: NgForm) {
    this.feedbackservice.addFeedback(
      form.value.nomModule,
      form.value.anneDetude,
      form.value.contenu
    );
  }
}
