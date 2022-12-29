import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = ""
  title: string = "hola"
  text: string = ""
  array: number[] = [1,2,3,4,5]
}
