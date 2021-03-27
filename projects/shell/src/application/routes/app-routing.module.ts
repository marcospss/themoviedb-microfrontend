// import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../views/main/main.component';
import { NotFoundComponent } from '../../views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'collections',
    loadChildren: () => import('collections/Grids').then((m) => m.GridsModule),
    // loadChildren: () =>
    //     loadRemoteModule({
    //       // remoteEntry: 'http://localhost:5010/remoteEntry.js',
    //       remoteName: 'collections',
    //       exposedModule: './Grids'
    //     })
    //     .then(m => m.GridsModule)
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
