import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IMovieDetails} from '../interfaces/IMovieDetails';

@Injectable({providedIn: 'root'})
export class MoviedetailsService {

  constructor(private http: HttpClient) {
  }

  getMovieDetails(url: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(url);
  }

  getMovies(url: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(url);
  }
}
