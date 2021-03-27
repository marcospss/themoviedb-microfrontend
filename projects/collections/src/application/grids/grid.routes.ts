import { Routes } from '@angular/router';
import { IndexComponent as PopularGrid } from './popular/index/index.component';

export const GRIDS_ROUTES: Routes = [
    {
      path: 'popular',
      component: PopularGrid
    }
];
