import { Component, Input, SimpleChanges } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  say: string = '';
  toSay: string = '';

  onSay(message: string) {
    this.toSay = message;
    this.getCat(this.toSay)
  }
 catSrc: string = ''

 constructor (private catService: CatService) {}

 async getCat(message: string) {
  this.catSrc = await this.catService.get(message)
 }
}
