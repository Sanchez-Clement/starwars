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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router'
const appRoutes: Routes = [
  { path: 'service/:resultat[swrequestservice.resultatEnvoiNon]', component: ShowDetailsComponent },



];


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,

    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes
    //  { enableTracing: true } // <-- debugging purposes only
   ),


  ],
  providers: [SwRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
