import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { BioModule } from './bio/bio.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BioModule,
    AppRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
