import {Component, OnInit} from '@angular/core';
import {ICharacter} from '../interfaces/ICharacter';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: ICharacter;
  selectedCharacter: ICharacter;

  onSelect(character: ICharacter) {
    this.selectedCharacter = character;
  }

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters()
      .subscribe(
        (resultCharacters: ICharacter) => this.characters = resultCharacters
      );
  }
}

