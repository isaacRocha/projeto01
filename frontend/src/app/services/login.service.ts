
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any = []
  url = '/api/login'

  constructor(private http: HttpClient, private router: Router) { }

  public login(login: Login) {
    return this.http.post(this.url, login).toPromise().then((res:any) => {
      if (res) {
        this.user = res[0];
        var senha = this.user.map((e: { senha: any; }): any => e.senha);
        if (senha[0]) {
          this.setTokenLocalStorage(senha[0]);
          this.router.navigate(['welcome']);
          return res
        } else {
          this.removerTokenLocalStorage();
        }
      }
      return
    }
    )

  }

  private setTokenLocalStorage(res: any): void {
    localStorage.setItem('token', res)
  }

  private removerTokenLocalStorage(): any {
    localStorage.removeItem('token');
  }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }
}

export interface Login {
  email?: '',
  senha?: ''
}

