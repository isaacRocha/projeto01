import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url = '/api/pergunta'
  constructor(private http: HttpClient) { }

  getQuestionJson() {
    return this.http.get<any>('http://localhost:3000/questions')
  }

  question!: Question[]

  getQuestions() {
    return this.http.get(this.url)
  }

  getQuestion(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  registerQuestion(question: Question) {
    return this.http.post(this.url, question);
  }

  deleteQuestion(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateQuestion(id: string, question: Question) {
    return this.http.put(this.url + '/' + id, question);
  }
}

export interface Question {
<<<<<<< HEAD
  idPergunta: '',
  idQuiz: '',
  pergunta: '',
  ajuda: '',
  status: '',
  avaliacao: ''
}
=======
    idPergunta: '',
    idQuiz: '',
    pergunta: '',
    ajuda: '',
    status: '',
    avaliacao: ''
}
>>>>>>> 9ebe2b569c1c0f3dbb043afaa779cfa9e2941430
