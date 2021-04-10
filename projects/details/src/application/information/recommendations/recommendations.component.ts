import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesService, UtilsService } from '../../../infrastructure/services';
import {
  MovieResults,
  StatusErrors,
  MovieItem,
} from '../../../infrastructure/models';
@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent implements OnInit {
  @Input()
  mediaId!: string;
  recommendations$!: Observable<MovieResults>;
  constructor(
    private moviesService: MoviesService,
    public utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.fetchRecommendations(this.mediaId);
  }

  private fetchRecommendations(mediaId: string) {
    this.recommendations$ = this.moviesService.recommendations({ mediaId });
  }

  trackByFn(index: number, item: MovieItem) {
    return item?.id;
  }
}
