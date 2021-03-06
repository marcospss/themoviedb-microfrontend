import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../infrastructure/services';
import { MovieResults, StatusErrors } from '../../infrastructure/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void  {
    this.movieResults();
  }

  error: StatusErrors = {};
  popular: MovieResults = {};

  title = 'Collections';

  movieResults() {
    this.moviesService.popular({ page: 1 }).subscribe(
      (data: MovieResults) => this.popular = data,
      error => this.error = error
    )
  }

  // TODO: Remove any
  trackByFn(index: number, item: any) {
    return item?.results // or item.id
  }

}
