import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public charactersList: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1500
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }
]

 public onDeletedCharacter(id: string): void {
  this.charactersList =  this.charactersList.filter(character => character.id !== id);
 }
 public onNewCharacter(character: Character):void {
  const newCharacter = { id: uuid(), ...character}
  this.charactersList.push(newCharacter);
 }
}
