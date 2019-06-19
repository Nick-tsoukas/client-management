import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showError: boolean;

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
    this.showError = false;
    this.authService.loginError.subscribe( val => {
      if (val === true) {
        this.showError = true;
      }
    });

  }

  register(form: NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

  login(form: NgForm){
    this.authService.logIn({
      email: form.value.email,
      password: form.value.password
    })
  }
}
