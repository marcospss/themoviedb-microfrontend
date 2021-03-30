import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { INFORMATION_ROUTES } from './information.routes';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SimilarComponent } from './similar/similar.component';



@NgModule({
  declarations: [MediaDetailsComponent, RecommendationsComponent, SimilarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(INFORMATION_ROUTES)
  ]
})
export class InformationModule { }
