import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book = {
    _id: "",
    author: "",
    title: "",
    yearPublication: "",
    price: 0,
    isbn: "",
    image: "",
  }

  @Output() bookAdded = new EventEmitter<Book>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.bookAdded.emit(this.book);
  }

}
