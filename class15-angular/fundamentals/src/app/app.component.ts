import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentals';
  person = {
    name: "Juan",
    address: "Cll falsa # 123",
    age: 20
  }

  property = "date"

  onClick(){
    alert("he sido clickeado");
  }
}
