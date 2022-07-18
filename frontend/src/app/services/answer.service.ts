import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  url = '/api/resposta'
  constructor(private http : HttpClient ) { }

  getAnswers(){
     return this.http.get(this.url) 
  }

  getAnswer(id:string){
    return this.http.get(this.url+'/'+id)
  }

}

export interface Answer{
  resposta:'',
  status:''
}
