import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { User } from "../../models/user";
import { NgForm } from "@angular/forms";
import { LoginService } from "../../Services/login.service";
import { Router } from "@angular/router";
/**
 * Ce fichier représente l'interface d'authentification de l'application
 */

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
  userType: string = "";
  @ViewChild("userForm", null) form: any;
  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  radiochange(e: any) {
    this.userType = e.target.value;
  }

  /**
   * Fonction permettant de récupérer le compte de l'utilisateur
   * @param form : le formulaire contenant les information du compte, entrées par l'utilisateur
   */
  authentification(form: NgForm) {
    if (form.valid) {
      let userType: number;
      switch (this.userType) {
        case "student":
          userType = 2;
          break;
        case "teacher":
          userType = 3;
          break;
        case "admin":
          userType = 1;
          break;
        default:
          console.log(this.userType);
      }
      const id = this.loginService.getUser(
        form.value.email,
        form.value.password,
        userType
      );
      console.log(id);

      if (id) {
        switch (userType) {
          case 1:
            this.router.navigate(["admin"]);
            break;
          case 2:
            this.router.navigate(["etudiant"]);
            break;
          case 3:
            this.router.navigate(["enseignant"]);
            break;
        }
      } else {
        alert("error logging");
      }
    }
  }
}
