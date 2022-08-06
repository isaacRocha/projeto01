import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuizService, Quiz, Quiz2 } from 'src/app/services/quiz.service';
import { AuthorService, Autor } from 'src/app/services/author.service';
import { CategoryService, Categoria } from 'src/app/services/category.service';
import { Router } from  '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  quiz: Quiz2 = {
    idQuiz:'',
    idAutor:'',  
    idCategoria:'',  
    idUsuario:'',
    obra:'',
    titulo:'',
    status: true,
    descricao:''
  }

  constructor(
    private QuizService: QuizService,
    private AuthorService: AuthorService,
    private CategoryService: CategoryService,
    private Router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.listQuiz();
    this.listAuthor();
    this.listCategory();
  }

  listQuiz() {
    this.QuizService.getQuizzes().subscribe(
      res => {
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

  alterarStatus(id: any) {
    if (id) {
      this.QuizService.getQuiz(id).subscribe(
        (res: any) => {
          this.quiz = res[0];
          console.log(this.quiz);
          
          if (this.quiz.status == <any>true) {
            this.quiz.status = <any>false
          }
          else {
            this.quiz.status = <any>true
          }
          this.QuizService.updateQuiz(id, this.quiz).subscribe(

            
            _ => {

              console.log(this.quiz)
              this.toast.success("Status atualizado com sucesso!");
              this.listQuiz();
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      )
    }
  }




  startQuiz(){ 
    localStorage.setItem("nome", this.nameKey.nativeElement.value)
  }
}
