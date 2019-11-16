import { Component, ViewChild, OnInit, Input } from "@angular/core";
import { User } from "../models/user";
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
  constructor() {}

  ngOnInit() {}
  authentification({ value, valid }: { value: any; valid: boolean }) {}
}
