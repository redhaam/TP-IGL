import { Component, OnInit, Input } from "@angular/core";
import { Feedback } from "src/app/models/Feedback";

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
  constructor() {}

  ngOnInit() {}
}
