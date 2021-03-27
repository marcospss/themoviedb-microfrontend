import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent as PopularGrid } from './popular/index/index.component';



@NgModule({
  declarations: [PopularGrid],
  imports: [
    CommonModule
  ]
})
export class GridsModule { }
