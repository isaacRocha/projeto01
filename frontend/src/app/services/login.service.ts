
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
        var status = this.user.map((e: { status: any; }): any => e.status);
        var pontos = this.user.map((e: { pontos: any; }): any => e.pontos);

        if(status == 'false'){
          localStorage.clear();
          return 
        }

        if (senha[0]) {
          this.setTokenLocalStorage(senha[0]);
          this.setIdSessionStorage(id[0]);
          this.setEmailSessionStorage(email[0]);
          this.setNomeSessionStorage(nome[0])
          this.setPerfilSessionStorage(perfil[0])
          this.setPontosSessionStorage(pontos[0])
          this.router.navigate(['welcome']);
          return res
        } else {
          this.removerTokenSessionStorage();
        }
      }
      return
    }
    )
  }

  private setIdSessionStorage(id: any): void {
    sessionStorage.setItem('id', id)
  }
  private setEmailSessionStorage(email: any): void {
    sessionStorage.setItem('email', email)
  }
  private setNomeSessionStorage(nome: any): void {
    sessionStorage.setItem('nome', nome)
  }
  private setPerfilSessionStorage(perfil: any): void {
    sessionStorage.setItem('perfil', perfil)
  }
  private setPontosSessionStorage(pontos: any): void {
    sessionStorage.setItem('pontos', pontos)
  }
  private setTokenLocalStorage(token: any): void {
    localStorage.setItem('token', token);
  }
  private removerTokenSessionStorage(): any {
    sessionStorage.removeItem('token');
  }
  public getToken(): string | null {
    return localStorage.getItem('token')
  }
}

export interface Login {
  email?: '',
  senha?: ''
}

