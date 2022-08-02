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

  registerQuiz(quiz: Quiz2) {
    return this.http.post(this.url, quiz);
  }

  deleteQuiz(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateQuiz(id: string, quiz: Quiz) {
    return this.http.put(this.url + '/' + id, quiz);
  }
}

export interface Quiz {
   idquiz:'',
   idautor:'',
   autor:'',
   idcategoria:'',
   categoria:'',
   idusuario:'1',
   obra:'',
   titulo:'',
   status: true,
   descricao:''
}

export interface Quiz2 {
  idquiz:'',
  idAutor:'',  
  idCategoria:'',  
  idUsuario:'1',
  obra:'',
  titulo:'',
  status: true,
  descricao:''
}