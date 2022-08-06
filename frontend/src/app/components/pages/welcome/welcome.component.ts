import { Component, OnInit } from '@angular/core';
import { RankingService, Usuario } from 'src/app/services/ranking.service'; 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  getUser!: Usuario[];
  constructor(private RankingService: RankingService) { 
  }

  nome:any = localStorage.getItem('nome');
  email:any = localStorage.getItem('email');
  
  ngOnInit(): void {
    this.listUser()
  }

  listUser(){
    this.RankingService.getUsuarios().subscribe( 
      res => {
        this.getUser = <any>res;
      },
      err => console.log(err)
    )
  }
}
