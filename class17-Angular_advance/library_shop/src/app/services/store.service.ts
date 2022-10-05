import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Book } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Book[] = [];
  private myCart = new BehaviorSubject<Book[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addBook(book: Book) {
    this.myShoppingCart.push(book);
    this.myCart.next(this.myShoppingCart);
  };

  getShoppingCart(){
    return this.myShoppingCart;
  };

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  };
};
