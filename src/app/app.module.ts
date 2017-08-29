import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SwRequestService } from './sw-request.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,


  ],
  providers: [SwRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
