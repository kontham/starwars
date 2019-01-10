import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ICharacter} from '../interfaces/ICharacter';
import {ICharacterDetails} from '../interfaces/ICharacterDetails';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnChanges {
  @Input() character: ICharacter;
  selectedCharacterDetails: ICharacterDetails;

  constructor(private movieService: MovieService) {
  }

  ngOnChanges(): void {
    this.getCharacterDetails(this.character.url);
  }

  getCharacterDetails(url): void {
    this.movieService.getCharacterDetails(url)
      .subscribe((resultCharacterDetails: ICharacterDetails) => this.selectedCharacterDetails = resultCharacterDetails);
  }
}
