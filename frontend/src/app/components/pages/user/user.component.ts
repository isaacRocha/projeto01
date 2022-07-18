import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  getUser!: Usuario[];
  constructor( private UsuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void { 
    this.listUser();
  }

  listUser(){
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }

  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }
}
