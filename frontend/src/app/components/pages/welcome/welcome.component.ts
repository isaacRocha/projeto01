import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  
  @ViewChild('name') nameKey!: ElementRef;

  getUser!: Usuario[];
  constructor( private UsuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void { 
    this.listUser();
  }

  listUser(){
    this.UsuarioService.getUsuarios().subscribe(
      res => {
        console.log(res)
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }

  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }
}
