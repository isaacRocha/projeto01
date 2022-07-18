import { Component, OnInit } from '@angular/core';
//import { TitleStrategy } from '@angular/router';
import { interval, timeout } from 'rxjs';
import { QuestionService, Question } from 'src/app/services/question.service';
import { AnswerService, Answer } from 'src/app/services/answer.service';
import { QuizService, Quiz } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;

  question!: Question[]
  answers!: Answer[]

  constructor(private questionService: QuestionService,
    private answerService: AnswerService,
    private quizService: QuizService
  ) {

  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
    this.getQuestion();
    this.getAnswer();
    
  }

  questions  = [{
    questionText: this.question,
    options: [{
      text: this.answers,
      correct: this.answers
    }
    ],
    explanation: this.question
  }]


  getQuestion() {
    this.questionService.getQuestions().subscribe(
      res => {
        return this.question = <any>res
      }
    )
  }

  getAnswer() {
    this.answerService.getAnswers().subscribe(
      res => this.answer = <any>res
    )
  }

  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }


    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;


      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    } else {
      setTimeout(() => {
        this.getProgressPercent();
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0"
    this.isQuizCompleted = false;
    // this.getRandom();
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  // getRandom(){
  //  return Math.floor(Math.random() * this.questionList.length);
  // }
}
