import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url = '/api/quiz'
  constructor( private http : HttpClient) { }

  getQuizzes(){
    return this.http.get(this.url)
  }

  getQuiz(id: string){
    return this.http.get(this.url+'/'+id)
  }
}

export interface Quiz {
   idquiz:'',
   idautor:'',
   idcategoria:'',
   idusuario:'',
   obra:'',
   titulo:'',
   status:'',
   descricao:''
}