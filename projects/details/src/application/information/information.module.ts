import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { INFORMATION_ROUTES } from './information.routes';

import { MoviesService, UtilsService } from '../../infrastructure/services';

import { MediaDetailsComponent } from './media-details/media-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SimilarComponent } from './similar/similar.component';
import { LoadingComponent } from '../components/loading/loading.component';

@NgModule({
  declarations: [
    MediaDetailsComponent,
    RecommendationsComponent,
    SimilarComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(INFORMATION_ROUTES),
  ],
  providers: [MoviesService, UtilsService],
})
export class InformationModule {}
