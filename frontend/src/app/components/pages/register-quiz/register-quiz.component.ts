import { Component, OnInit } from '@angular/core';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';

@Component({
  selector: 'app-register-quiz',
  templateUrl: './register-quiz.component.html',
  styleUrls: ['./register-quiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  getAuthor!: Autor[];
  getCategory!: Categoria[];

  constructor(
    private AuthorService: AuthorService,
    private CategoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.listAuthor();
    this.listCategory();
  }

  listAuthor() {
    this.AuthorService.getAuthor().subscribe(
      res => {
        this.getAuthor = <any>res;
      }, err => console.log(err)
    )
  }

  listCategory() {
    this.CategoryService.getCategories().subscribe(
      res => {
        this.getCategory = <any>res;
      }, err => console.log(err)
    )
  }
}
