import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ICharacter} from '../interfaces/ICharacter';
import {ICharacterDetails} from '../interfaces/ICharacterDetails';
import {MovieService} from '../services/movie.service';
import {MoviedetailsService} from '../services/moviedetails.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnChanges {
  @Input() character: ICharacter;
  selectedCharacterDetails: ICharacterDetails;
  MovieDetailsArray = [];


  constructor(private movieService: MovieService,
              private moviedetailsService: MoviedetailsService) {
  }

  ngOnChanges() {
  this.getCharacterDetails(this.character.url);
  }



  getCharacterDetails(url): void {
    this.movieService.getCharacterDetails(url)
      .subscribe(
        (resultCharacterDetails: ICharacterDetails) => {this.selectedCharacterDetails = resultCharacterDetails
          this.getFilmDetails(this.selectedCharacterDetails);
        });
  }

  getFilmDetails(data: any) {
    const filmDetails = data.films;
    this.MovieDetailsArray = [];
    filmDetails.forEach((i) => { this.moviedetailsService.getMovieDetails(i)
        .subscribe((data: any) => this.MovieDetailsArray.push(data));
    });
  }}


