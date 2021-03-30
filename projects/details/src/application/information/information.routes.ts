import { Routes } from '@angular/router';
import { MediaDetailsComponent } from './media-details/media-details.component';

export const INFORMATION_ROUTES: Routes = [
    {
      path: 'details/:mediaType/:mediaId',
      component: MediaDetailsComponent
    }
];
