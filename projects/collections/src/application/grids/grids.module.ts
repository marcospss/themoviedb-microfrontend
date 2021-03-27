import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GRIDS_ROUTES } from './grid.routes';

import { IndexComponent as PopularGrid } from './popular/index/index.component';

@NgModule({
  declarations: [PopularGrid],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(GRIDS_ROUTES)
  ]
})
export class GridsModule { }
