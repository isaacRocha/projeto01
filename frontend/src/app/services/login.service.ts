
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any = []
  url = '/api/login'

  constructor(private http: HttpClient, private router: Router) { }

  public login(login: Login) {
    return this.http.post(this.url, login).toPromise().then(res => {
      
      if (res) {

        /*
         apelido, email, idusuario, nome, perfil, pontos, senha, status, uf
        */
        this.user = res;

        var id = this.user.map((e: { idusuario: any; }): any => e.idusuario);
        var email = this.user.map((e: { email: any; }): any => e.email);
        var nome = this.user.map((e: { nome: any; }): any => e.nome);
        var perfil = this.user.map((e: { perfil: any; }): any => e.perfil);
        var senha = this.user.map((e: { senha: any; }): any => e.senha);

        if (senha[0]) {
          this.setTokenLocalStorage(senha[0]);
          this.setIdLocalStorage(id[0]);
          this.setEmailLocalStorage(email[0]);
          this.setNomeLocalStorage(nome[0])
          this.setPerfilLocalStorage(perfil[0])
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

  private setIdLocalStorage(id: any) {
    localStorage.setItem('id', id)
  }

  private setEmailLocalStorage(email: any) {
    localStorage.setItem('email', email)
  }
  private setNomeLocalStorage(nome: any) {
    localStorage.setItem('nome', nome)
  }
  private setPerfilLocalStorage(perfil: any) {
    localStorage.setItem('perfil', perfil)
  }

  private setTokenLocalStorage(token: any): void {
    localStorage.setItem('token', token)
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

