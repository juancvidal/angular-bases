import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public nameHeroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'She Hulk']
  public deletedHeroe?: string = '';

  deleteLastHereo():void{
    this.deletedHeroe = this.nameHeroes.pop()
  }
}
