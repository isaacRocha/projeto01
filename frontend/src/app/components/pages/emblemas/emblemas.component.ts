import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emblemas',
  templateUrl: './emblemas.component.html',
  styleUrls: ['./emblemas.component.css']
})
export class EmblemasComponent implements OnInit {

  public perfil:boolean = false;
  ngOnInit(): void {
    this.verificaPerfil()
  }

  verificaPerfil(){
    const perfil = sessionStorage.getItem('perfil')
    if(perfil == 'Administrador'){
      this.perfil = true;  
    }
  }

}
