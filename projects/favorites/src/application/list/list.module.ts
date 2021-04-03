import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LIST_ROUTES } from './list.routes';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LIST_ROUTES)
  ]
})
export class ListModule { }
