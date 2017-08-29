import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',


  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'Star Wars';
  results: any;
  resultatEnvoi : any;
  resultatEnvoiNon : any;
  urlEnvoi : any;
  resultatDetail : any;


// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}

ngOnInit(): void {
  // Make the HTTP request:
  this.http.get('https://swapi.co/api/').subscribe(data => {
    // Read the result field from the JSON response.
    this.results = Object.keys(data);
    console.table(this.results);
  });
}
envoi(test) {
  this.http.get('https://swapi.co/api/' + test).subscribe(data => {
    // Read the result field from the JSON response.
    this.resultatEnvoi = data['results'];
    this.urlEnvoi =  test;
    console.table()
this.resultatEnvoiNon = Object.keys(data['results'][0])[0];

  });
}
affichedetail(test) {
  console.log(test);
  this.http.get(test).subscribe(data => {
    // Read the result field from the JSON response.
    this.resultatDetail = data['results'];

    console.table(data)


  });
}

}
