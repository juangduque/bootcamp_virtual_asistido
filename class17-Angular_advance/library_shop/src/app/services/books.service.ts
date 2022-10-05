import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book.model';

interface getBookData {
  books: Book[];
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBooks(){
    return this.http.get<getBookData>('http://127.0.0.1:3000/api/v1/books');
  }
}
