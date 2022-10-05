import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books.service';
import { StoreService } from 'src/app/services/store.service';

import { Book } from "../../models/book.model";

@Component({
  selector: 'app-suggested-books',
  templateUrl: './suggested-books.component.html',
  styleUrls: ['./suggested-books.component.css']
})
export class SuggestedBooksComponent implements OnInit {

  books: Book[] = [];
  total = 0;

  constructor(
    private bookService: BooksService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks()
    .subscribe( data => {
      this.books = data.books;
    })
  }

  onAddToShoppingCart(book: Book){
    this.storeService.addBook(book);
    this.total = this.storeService.getTotal();
  }
}
