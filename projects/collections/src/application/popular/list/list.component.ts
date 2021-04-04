import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../infrastructure/services';
import { MovieResults, StatusErrors, MovieItem } from '../../../infrastructure/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  error: StatusErrors = {};
  popular: MovieResults = {};

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movieResults();
  }

  movieResults() {
    this.moviesService.popular({ page: 1 }).subscribe(
      (data: MovieResults) => this.popular = data,
      error => this.error = error
    )
  }

  trackByFn(index: number, item: MovieItem) {
    return item?.id;
  }

}
