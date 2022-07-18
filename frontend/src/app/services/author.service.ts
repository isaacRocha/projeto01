import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url = '/api/autor';
  constructor(private http: HttpClient) { }

  getAuthor() {
    return this.http.get(this.url);
  }
}

export interface Autor {
  idautor?:'', 
  autor?:'' 
}
