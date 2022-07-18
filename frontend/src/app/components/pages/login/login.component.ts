import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, Login } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    senha: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    try {
      const result = this.loginService.login(this.login);


      this.router.navigate(['welcome']);
    } catch (error) {
      console.error(error);
    }
  
  }

}
