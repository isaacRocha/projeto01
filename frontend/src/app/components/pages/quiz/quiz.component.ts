import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuizService, Quiz } from 'src/app/services/quiz.service';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  getQuiz!: Quiz[];
  getAuthor!: Autor[];
  getCategory!: Categoria[];

  constructor(
    private QuizService: QuizService,
    private AuthorService: AuthorService,
    private CategoryService: CategoryService,
    private Router: Router) { }

  ngOnInit(): void {
    this.listQuiz();
    this.listAuthor();
    this.listCategory();
  }

  listQuiz() {
    this.QuizService.getQuizzes().subscribe(
      res => {
        console.log(res)
        this.getQuiz = <any>res;
      }, err => console.log(err)
    )
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




  startQuiz(){ 
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }
}
