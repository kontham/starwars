import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IMovieDetails} from '../interfaces/IMovieDetails';
import {ICharacterDetails} from '../interfaces/ICharacterDetails';
import {MoviedetailsService} from '../services/moviedetails.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})

export class MoviedetailsComponent implements OnChanges {
  @Input() oneCharacterDetail: ICharacterDetails;
  selectCharacterDetails: ICharacterDetails;
  selectedMovieDetails: IMovieDetails;
  data: IMovieDetails;

  constructor(private moviedetailsService: MoviedetailsService) {
  }

  ngOnChanges(): void {
    this.getMovieDetails(this.selectCharacterDetails.url);
    this.getMovies(this.oneCharacterDetail.films);
  }

  getMovieDetails(url): void {
    this.moviedetailsService.getMovieDetails(url)
      .subscribe((resultDetails: IMovieDetails) => this.selectedMovieDetails = resultDetails);
  }

  getMovies(url): void {
    this.moviedetailsService.getMovies(url)
      .subscribe(res => this.data = res);
  }
}

