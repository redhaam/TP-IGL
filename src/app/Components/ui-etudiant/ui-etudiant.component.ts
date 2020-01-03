import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/Services/login.service";
import { Router } from "@angular/router";
/**
 * Ce fichier représente l'interface initiale de l'étudiant
 */

@Component({
  selector: "app-ui-etudiant",
  templateUrl: "./ui-etudiant.component.html",
  styleUrls: ["./ui-etudiant.component.css"]
})
export class UiEtudiantComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.checkLogin();
  }
}
