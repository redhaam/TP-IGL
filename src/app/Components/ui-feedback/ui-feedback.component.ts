/**
 * Ce fichier représente l'interface que verra l'étudiant en donnant un feedback
 */

import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Feedback } from "src/app/models/Feedback";
import { NgForm } from "@angular/forms";
import { FeedbackService } from "../../Services/feedback.service";
import { LoginService } from "src/app/Services/login.service";
import { Router } from "@angular/router";

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
  constructor(
    private loginService: LoginService,
    public feedbackservice: FeedbackService
  ) {}

  ngOnInit() {
    this.loginService.checkLogin();
  }

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
