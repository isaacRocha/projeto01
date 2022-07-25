import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //@ViewChild('name') nameKey!: ElementRef;

  getUser!: Usuario[];
  User: Usuario = {
    idusuario: '',
    nome: '',
    email: '',
    uf: '',
    apelido: '',
    senha: '',
    status: null,
    perfil: 'Usuario',
    pontos: '0'
  }
  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.listUser();
  }

  listUser() {
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }

  alterarStatus() {

    // if(this.User.status==true)
    // await this.User.status;false

    // if(this.User.status==false)
    // await this.User.status;true

    this.UsuarioService.alterarStatus(this.User.idusuario, this.User).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
  }
}
