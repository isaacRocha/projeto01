import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { QuizService, Quiz, Quiz2 } from 'src/app/services/quiz.service';
import { QuestionService, Question } from 'src/app/services/question.service';
import { AnswerService, Answer } from 'src/app/services/answer.service';


@Component({
  selector: 'app-register-quiz',
  templateUrl: './register-quiz.component.html',
  styleUrls: ['./register-quiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  getAuthor!: Autor[]; 
  getCategory!: Categoria[]; 


  quiz2 : Quiz2 = {  
    idquiz:'',
    idAutor:'',    
    idCategoria:'',    
    idUsuario:'1',
    obra:'', 
    titulo:'',
    status:true,
    descricao:''  };

  quiz : Quiz = {  
    idquiz:'',
    idautor:'',
    autor:'',
    idcategoria:'',
    categoria:'',
    idusuario:'1',
    obra:'', 
    titulo:'',
    status:true,
    descricao:''  };

  question : Question = {  
  idPergunta: '',
  idQuiz: '',
  pergunta: '',
  ajuda: '',
  status: '',
  avaliacao: ''};


  answer : Answer = {  
    idresposta:'',
    idpergunta:'',
    resposta: '',
    status: ''  };




 

  constructor(
    private AuthorService: AuthorService,
    private CategoryService: CategoryService,
    private QuestionService: QuestionService,
    private QuizService: QuizService,
    private AnswerService: AnswerService,
    private Router: Router
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


  registerQuiz(){   
    this.QuizService.registerQuiz(this.quiz2).subscribe(
      res => {
        console.log('deu bom'),
        this.Router.navigate(['/quiz']);
      },
      err => console.log(err),  
    );
  }

  registerQuestion(){
    this.QuestionService.registerQuestion(this.question).subscribe(
      res => {
        console.log('deu bom'),
        this.Router.navigate(['/quiz']);
      },
      err => console.log(err),  
    );
  }

  registerAnswer(){
    this.AnswerService.registerAnswer(this.answer).subscribe(
      res => {
        console.log('deu bom'),
        this.Router.navigate(['/quiz']);
      },
      err => console.log(err),  
    );
  }

  registerAll(){
    this.registerQuiz;
    this.registerQuestion;
    this.registerAnswer;
  }

}
