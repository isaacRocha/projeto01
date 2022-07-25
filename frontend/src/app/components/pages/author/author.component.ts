import { Component, OnInit } from '@angular/core';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  getAuthor!: Autor[];

  constructor(
    private AuthorService: AuthorService,
    private Router: Router) { }

  ngOnInit(): void {
    this.listAuthor()
  }

  listAuthor() {
    this.AuthorService.getAuthors().subscribe(
      res => {
        return this.getAuthor = <any>res;
      }, err => console.log(err)
    )
  }

  deletarAutor(id: any) {
    this.AuthorService.deleteAuthor(id).subscribe(
      res => {
        console.log('Autor deletado');
        this.listAuthor();
      },
      err => console.log(err)
    );
  }

}
