import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/Services/login.service";

/**
 * Ce ficheir représente l'interface initiale de l'enseignant
 */

@Component({
  selector: "app-enseignant",
  templateUrl: "./enseignant.component.html",
  styleUrls: ["./enseignant.component.css"]
})
export class EnseignantComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.checkLogin();
  }
}
