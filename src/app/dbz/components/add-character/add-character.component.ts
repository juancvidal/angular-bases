import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: `./add-character.component.html`,
  styleUrl: './add-character.component.css',

})
export class AddCharacterComponent {

  @Output()
  public onEmitNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: 'Juan',
    power: 10
  }

  public emitCharacter() :void {

    console.log(this.character)
    if( this.character.name.length === 0) return

    this.onEmitNewCharacter.emit({...this.character})
    this.character.name = '';
    this.character.power = 0;
  }
}
