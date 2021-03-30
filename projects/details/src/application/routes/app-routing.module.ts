import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../views/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent},
  {
    path: '',
    redirectTo: 'details/movie/508442',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
