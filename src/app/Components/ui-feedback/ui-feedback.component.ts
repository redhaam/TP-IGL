import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Feedback } from "src/app/models/Feedback";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-ui-feedback",
  templateUrl: "./ui-feedback.component.html",
  styleUrls: ["./ui-feedback.component.css"]
})
export class UiFeedbackComponent implements OnInit {
  @Input() feedback: Feedback = {
    id: "",
    anneDetude: "",
    nomModule: "",
    contenu: ""
  };

  @ViewChild("formulaire", null) form: any;

  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm) {}
}
