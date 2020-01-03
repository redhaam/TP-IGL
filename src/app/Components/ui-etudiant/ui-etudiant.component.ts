/**
 * Ce fichier représente l'interface initiale de l'étudiant
 */
import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/Services/login.service";
import { Etudiant } from "src/app/models/Etudiant";
import { StudentService } from "src/app/Services/student.service";

@Component({
  selector: "app-ui-etudiant",
  templateUrl: "./ui-etudiant.component.html",
  styleUrls: ["./ui-etudiant.component.css"]
})
export class UiEtudiantComponent implements OnInit {
  student: Etudiant;
  constructor(
    private loginService: LoginService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.loginService.checkLogin();
    this.student = this.studentService.etudiant;
  }
}
