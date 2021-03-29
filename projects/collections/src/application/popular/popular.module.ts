import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { POPULAR_ROUTES } from './popular.routes';
import { ListComponent } from './list/list.component';
import { MoviesService } from '../../infrastructure/services';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(POPULAR_ROUTES)
  ],
  providers: [MoviesService]
})
export class PopularModule { }
