import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MoviesService, UtilsService } from '../../../infrastructure/services';
import { MoviesDetails, StatusErrors } from '../../../infrastructure/models';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailsComponent implements OnInit, OnDestroy {
  private subscriptionRoute!: Subscription;
  error: StatusErrors = {};
  details$!: Observable<MoviesDetails>;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    public utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.subscriptionRoute = this.route.params
      .pipe(map(({ mediaType, mediaId }) => this.fetchDetails(mediaId)))
      .subscribe();
  }

  ngOnDestroy() {
    this.subscriptionRoute.unsubscribe();
  }

  private fetchDetails(mediaId: string) {
    this.details$ = this.moviesService.details({ mediaId });
  }
}
