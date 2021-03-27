import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { GridsModule } from '../application/grids/grids.module';

import { AppComponent } from '../views/home/app.component';
import { MainComponent } from '../views/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GridsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
