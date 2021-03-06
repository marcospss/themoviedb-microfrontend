import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../views/main/main.component';
import { NotFoundComponent } from '../../views/not-found/not-found.component';

const PopularModule = async () => {
  const module = await import('collections/Popular');
  return module.PopularModule;
};

const DetailsModule = async () => {
  const module = await import('details/Details');
  return module.InformationModule;
};

const FavoritesModule = async () => {
  const module = await import('favorites/List');
  return module.ListModule;
};

// const PopularModule = async () => {
//   const module = await loadRemoteModule({
//     remoteEntry: 'http://localhost:5010/remoteEntry.js',
//     remoteName: 'collections',
//     exposedModule: './Popular',
//   });
//   return module.PopularModule;
// };

const routes: Routes = [
  { path: 'home', component: MainComponent},
  {
    path: 'collections',
    loadChildren: PopularModule,
  },
  {
    path: 'media',
    loadChildren: DetailsModule,
  },
  {
    path: 'favorites',
    loadChildren: FavoritesModule,
  },
  {
    path: '',
    redirectTo: 'collections/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
