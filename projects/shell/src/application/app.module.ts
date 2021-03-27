import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { MainComponent } from '../views/main/main.component';
import { AppComponent } from '../views/home/app.component';
import { NotFoundComponent } from '../views/not-found/not-found.component';
@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
