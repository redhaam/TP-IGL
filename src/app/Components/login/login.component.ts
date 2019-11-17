import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User = {
    email: '',
    password: ''
  };
  @ViewChild('userForm', null) form: any;
  constructor() { }


  ngOnInit() { }
  authentification(form: NgForm) {
    if ((form.value.email === 'hm_kadri@esi.dz') && (form.value.password === '1234')) {
      alert('Login success');
    }
  }
}
