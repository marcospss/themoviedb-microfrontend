import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFullSizeComponent } from './card-full-size/card-full-size.component';
import { LoadingComponent } from './loading/loading.component';


const COMPONENTS = [CardFullSizeComponent, LoadingComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: COMPONENTS,
})
export class ComponentsModule { }
