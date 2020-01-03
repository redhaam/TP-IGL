/**
 * Ce fichier représente le composant navbar (barre de navigation).
 * Affichée dans toutes les interfaces de l'application
 */
import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/Services/login.service";
import { StudentService } from "src/app/Services/student.service";
import { AdminService } from "src/app/Services/admin.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  currentUserName: string;

  constructor(private loginService: LoginService) {
    //
  }

  ngOnInit() {
    this.currentUserName = this.loginService.currentuser;
  }
}
