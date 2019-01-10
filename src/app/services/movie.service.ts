import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {ICharacterDetails} from '../interfaces/ICharacterDetails';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getCharacterDetails(url: string): Observable<ICharacterDetails> {
    return this.http.get<ICharacterDetails>(url)
      .pipe(
        catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
