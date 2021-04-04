import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MoviesService, UtilsService } from '../../infrastructure/services';

import { ComponentsModule } from '../components/components.module';

import { POPULAR_ROUTES } from './popular.routes';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(POPULAR_ROUTES),
    ComponentsModule,
  ],
  providers: [MoviesService, UtilsService]
})
export class PopularModule { }
