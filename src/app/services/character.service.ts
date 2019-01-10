import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CHARACTERS} from '../mock-data';

@Injectable({providedIn: 'root'})
export class CharacterService {

  constructor() {
  }

  getCharacters(): Observable<any> {
    return of(CHARACTERS);
  }
}
