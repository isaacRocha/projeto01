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
<<<<<<< HEAD
  
=======

>>>>>>> 9ebe2b569c1c0f3dbb043afaa779cfa9e2941430
  getAuthor(id: string) {
    return this.http.get(this.url + '/' + id)
  }

<<<<<<< HEAD
  registerAuthor(author: Autor) {
=======
  registerAuthor(author: Author) {
>>>>>>> 9ebe2b569c1c0f3dbb043afaa779cfa9e2941430
    return this.http.post(this.url, author);
  }

  deleteAuthor(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

<<<<<<< HEAD
  updateAuthor(id: string, author: Autor) {
=======
  updateAuthor(id: string, author: Author) {
>>>>>>> 9ebe2b569c1c0f3dbb043afaa779cfa9e2941430
    return this.http.put(this.url + '/' + id, author);
  }
}

export interface Author {
  idautor?:'', 
  autor?:'' 
<<<<<<< HEAD
}
=======
}

>>>>>>> 9ebe2b569c1c0f3dbb043afaa779cfa9e2941430
