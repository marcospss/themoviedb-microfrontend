import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { TvResults, TvDetails, ParamsUrl } from '../models';

@Injectable()
export class TvShowsService {
  constructor(private http: HttpClient) {}

  discover({ sortBy = 'popularity.desc', page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/discover/tv?${environment.paramsDefault}&page=${page}&sort_by=${sortBy}&timezone=America%2FNew_York&include_null_first_air_dates=false`
      )
      .pipe(catchError(this.handleError));
  }

  search({ query, page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/search/tv?${environment.paramsDefault}&page=${page}&query=${query}&include_adult=false`
      )
      .pipe(catchError(this.handleError));
  }

  details({ mediaId }: ParamsUrl) {
    return this.http
      .get<TvDetails>(
        `${environment.baseURL}/tv/${mediaId}?${environment.paramsDefault}`
      )
      .pipe(catchError(this.handleError));
  }

  recommendations({ mediaId, page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/${mediaId}/recommendations?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  similar({ mediaId, page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/${mediaId}/similar?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  airingToday({ page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/airing_today?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  onTheAir({ page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/on_the_air?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  popular({ page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/popular?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  topRated({ page = 1 }: ParamsUrl) {
    return this.http
      .get<TvResults>(
        `${environment.baseURL}/tv/top_rated?${environment.paramsDefault}&page=${page}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
