import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`<h1>Hola counter</h1>
    <h3>{{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number = 150;

  increaseBy(value: number):void{
    this.counter += value
  }
  reset():void{
    this.counter = 150
  }
}
