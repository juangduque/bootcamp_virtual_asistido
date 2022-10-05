import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  counter = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(books => {
      this.counter = books.length;
    })
  }
}
