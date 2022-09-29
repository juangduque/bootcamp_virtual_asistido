import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  property: string = "file";
  name: string = "";
  animal: string = "dog"

  person = {
    name: "Nicolas",
    age: 20,
    address: "cll falsa # 123"
  }

  fruits = [ "apple", "kiwi", "banana", "watermelon"]

  onClick() {
    alert("the button was clicked")
  };
}
