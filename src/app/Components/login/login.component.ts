/**
 * Ce fichier représente l'interface d'authentification de l'application
 */
import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { User } from "../../models/user";
import { NgForm } from "@angular/forms";
import { LoginService } from "../../Services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Input() user: User = {
    email: "",
    password: ""
  };
  @ViewChild("userForm", null) form: any;
  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  /**
   * Fonction permettant de récupérer le compte de l'utilisateur
   * @param form : le formulaire contenant les information du compte, entrées par l'utilisateur
   */
  authentification(form: NgForm) {
    if (form.valid) {
      this.loginService.getUser(form.value.email, form.value.password, 1);
    }
  }
}
