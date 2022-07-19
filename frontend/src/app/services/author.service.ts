import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url = '/api/autor';
  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(this.url);
  }

  getAuthor(id: string) {
    return this.http.get(this.url + '/' + id)
  }

  registerAuthor(author: Author) {
    return this.http.post(this.url, author);
  }

  deleteAuthor(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateAuthor(id: string, author: Author) {
    return this.http.put(this.url + '/' + id, author);
  }
}

export interface Author {
  idautor?:'', 
  autor?:'' 
}

