import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CHARACTERS} from '../mock-data';
import {ICharacter} from '../interfaces/ICharacter';

@Injectable({providedIn: 'root'})
export class CharacterService {

  constructor() {
  }

  getCharacters(): Observable<ICharacter[]> {
    return of(CHARACTERS);
  }
}
