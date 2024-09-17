
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: `./list.component.css`
})
export class ListComponent {
  public listGroupItem = 'list-group-item'

  @Input()
  public characterL: Character[] = [{
    name: 'Trunks',
    power: 6000
  }]

  @Output()
  public onEmitIdCharacter: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void {
    if(!id) return;
    this.onEmitIdCharacter.emit(id)
  }
}
