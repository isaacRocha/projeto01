import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='/api/login' 
  constructor(private http:HttpClient) { }

  async login(login: Login) {
     const result  =  await this.http.post(this.url, login).toPromise();
    if(result == false){
      return false;
    }else{
      window.localStorage.setItem('token', 'token');
      return true
    } 
    
  }
}

export interface Login  {
  email?:'',
  senha?:''
}

