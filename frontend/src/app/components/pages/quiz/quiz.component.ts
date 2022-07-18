import { Component, OnInit } from '@angular/core';
import { QuizService, Quiz } from 'src/app/services/quiz.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  getQuiz!: Quiz[];

  constructor(private QuizService: QuizService, private Router: Router) { }

  ngOnInit(): void {
    this.listQuiz()
  }

  listQuiz() {
    this.QuizService.getQuizzes().subscribe(
      res => {
        console.log(res)
        this.getQuiz = <any>res;
      }, err => console.log(err)
    )
  }
}
